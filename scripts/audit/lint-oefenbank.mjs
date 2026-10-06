// Patroon-controle voor de oefenbanken (herschrijfronde 6 okt 2026).
// Regelgebaseerd: elke regel die met `{ q:` begint is één vraag-object; we parsen die regel los.
// Meldt per vraag: syntaxfout, ongeldig antwoord, dubbele opties, en de bekende plaksel-patronen.
// Gebruik: node scripts/audit/lint-oefenbank.mjs <bestand> [vanRegel] [totRegel] [--kort] [--alleen=CODE,CODE]
import fs from "node:fs";
const [file, van = "1", tot = "999999"] = process.argv.slice(2).filter((a) => !a.startsWith("--"));
const kort = process.argv.includes("--kort");
const alleenArg = process.argv.find((a) => a.startsWith("--alleen="));
const alleen = alleenArg ? new Set(alleenArg.slice(9).split(",")) : null;
const regels = fs.readFileSync(file, "utf8").split("\n");
const TALEN = /^(engels|duits|frans|spaans|latijn|grieks)$/;
const STAART = /onder bepaalde omstandigheden|in de moderne taal|in de natuur\b|in de praktijk|als stijlfiguur|in literaire teksten|in het algemeen|in de wetenschap|volgens de theorie|in de regel\b|in het dagelijks leven|in de taalkunde|in sommige gevallen|op lange termijn|in de letterkunde|in bepaalde situaties|in de economie\b|in de biologie\b|in de scheikunde\b|in de natuurkunde\b/i;
const woorden = (s) => String(s).toLowerCase().replace(/[^\p{L}\p{N}\s]/gu, " ").split(/\s+/).filter((w) => w.length > 2);
const jaccard = (a, b) => { const A = new Set(woorden(a)), B = new Set(woorden(b)); if (!A.size || !B.size) return 0; let n = 0; for (const x of A) if (B.has(x)) n++; return n / (A.size + B.size - n); };
const isGetal = (s) => /^[\s€$£−\-+]*[\d.,/:×x\s%°²³]+[a-zA-Zµ²³°%€/\s]{0,8}$/.test(String(s));
let vak = "?", groep = "?";
const per = {}, alle = [];
let n = 0;
for (let i = 0; i < regels.length; i++) {
  const r = regels[i], nr = i + 1;
  let m;
  if ((m = r.match(/^ {2}(?:"([^"]+)"|([a-zA-Z0-9_-]+)):\s*[{[]/))) { vak = m[1] || m[2]; groep = "-"; }
  if ((m = r.match(/^ {4}(groep\d+|klas\d+)\s*:/))) groep = m[1];
  if ((m = r.match(/^\s*(?:export )?const (_\w+)\s*=\s*\[/))) { vak = m[1]; groep = "-"; }
  if ((m = r.match(/^TOPIC_QUESTIONS\["([^"]+)"\]\s*=\s*\[/))) { vak = m[1]; groep = "-"; }
  if (nr < +van || nr > +tot) continue;
  if (!/^\s*\{\s*q\s*:/.test(r)) continue;
  n++;
  const label = groep === "-" ? vak : `${vak}.${groep}`;
  const meld = [];
  let v;
  try { v = new Function(`return (${r.trim().replace(/,\s*$/, "")});`)(); } catch (e) { meld.push(["SYNTAX", e.message]); }
  if (v) {
    const o = v.options, a = v.answer;
    if (!Array.isArray(o) || typeof a !== "number" || a < 0 || a >= o.length) meld.push(["ANTWOORD", "antwoord-index ongeldig"]);
    else {
      const norm = o.map((x) => String(x).replace(/\*\*/g, "").replace(/\s+/g, " ").trim());
      if (new Set(norm).size < norm.length) meld.push(["DUBBEL", "dubbele opties"]);
      const goed = String(o[a]);
      const fout = o.filter((_, k) => k !== a).map(String);
      const getallen = o.every(isGetal);
      for (const f of fout) {
        if (/\S\s+of\s+[A-ZÀ-ÝÄÖÜ0-9'"‘]/.test(f) && !/\s+of\s+/.test(goed)) meld.push(["OF", `«${f}»`]);
        if (STAART.test(f) && !STAART.test(goed)) meld.push(["STAART", `«${f}»`]);
        if (/^[A-ZÀ-Ý][^,]{1,40}, [A-ZÀ-Ý][^,]{1,40} en [A-ZÀ-Ý]/.test(f)) meld.push(["ABC", `«${f}»`]);
        if (!getallen && woorden(goed).length >= 4 && woorden(f).length >= 4 && jaccard(goed, f) >= 0.6) meld.push(["KOPIE", `«${f}» ≈ «${goed}»`]);
      }
      if (!getallen) {
        const lmax = Math.max(...fout.map((f) => f.length));
        if (goed.length > lmax * 1.5 && goed.length - lmax >= 15) meld.push(["LANG", `goed ${goed.length} tekens, langste fout ${lmax}`]);
        const toel = (s) => /\(|—| – |: |; /.test(s);
        if (toel(goed) && !fout.some(toel) && goed.length > 12) meld.push(["TOELICHTING", `alleen de goede optie heeft een toelichting: «${goed}»`]);
      }
      if (TALEN.test(vak) && o.some((x) => /\([^)]*[a-z]{3,}[^)]*\)/.test(String(x)))) meld.push(["HAAKJES-TAAL", "opties met (…)-toevoeging in een taalvak — Nederlands restje?"]);
      if (/(^|[^/\p{L}])(u|uw)(?![\p{L}/])/u.test(` ${v.q} ${v.explanation || ""} `.replace(/'[^']*'|"[^"]*"/g, "")) && !TALEN.test(vak)) meld.push(["U", "u/uw in vraag of uitleg (moet je/jouw)"]);
      if (!v.explanation || String(v.explanation).trim().length < 5) meld.push(["UITLEG", "geen explanation"]);
    }
  }
  const gefilterd = alleen ? meld.filter(([c]) => alleen.has(c)) : meld;
  per[label] ??= { n: 0, gemeld: 0 };
  per[label].n++;
  if (gefilterd.length) { per[label].gemeld++; alle.push({ nr, label, meld: gefilterd, q: v?.q }); }
}
if (!kort) for (const x of alle) console.log(`r${x.nr} ${x.label} «${String(x.q).slice(0, 70).replace(/\n/g, " ")}»\n   ${x.meld.map(([c, t]) => `${c}: ${t}`).join("\n   ")}`);
console.log(`\n${n} vragen · ${alle.length} met melding`);
for (const [k, w] of Object.entries(per)) console.log(`  ${k}: ${w.n} vragen, ${w.gemeld} gemeld`);
const codes = {}; for (const x of alle) for (const [c] of x.meld) codes[c] = (codes[c] || 0) + 1;
console.log("per code:", JSON.stringify(codes));
