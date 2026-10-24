// Spoor 2 (24 okt 2026; kopie van spoor1-bouw-zenddocs) — bouwt de adres-tabellen van de drie SPOOR1-ZEND-*.md verzenddocs
// uit de research-lijsten SPOOR1-BIBLIOTHEKEN.md / SPOOR1-KINDEROPVANG.md / SPOOR1-GEZINSORGANISATIES.md.
// Ontdubbelt tegen: NIET-MEER-MAILEN.md · álle e-mailadressen in docs/outreach, docs/gemeenten, docs/LEERGELD-OUTREACH.md
// (= alles wat ooit gemaild is) · docs/outreach/opvolgbronnen-emails.txt (export uit Supabase) · elkaar.
// Gebruik: node scripts/outreach/spoor2-bouw-zenddocs.mjs            (schrijft de tabellen)
//          node scripts/outreach/spoor2-bouw-zenddocs.mjs --toon     (alleen tellen en tonen)
import fs from "node:fs";
import path from "node:path";

const ROOT = "C:/Users/mark-/Desktop/Studiebol/leerschool";
const OUT = `${ROOT}/docs/outreach`;
const TOON = process.argv.includes("--toon");
const EMAIL_RE = /[\w.+-]+@[\w-]+(?:\.[\w-]+)+/g;

const BRONNEN = [
  { in: "SPOOR2-SPEELGOED-KLEDING.md", uit: "SPOOR2-ZEND-SPEELGOED-KLEDING.md", soort: "speelgoed/kleding" },
  { in: "SPOOR2-SINT-KERST.md", uit: "SPOOR2-ZEND-SINT-KERST.md", soort: "sint/kerst" },
  { in: "SPOOR2-WELZIJN.md", uit: "SPOOR2-ZEND-WELZIJN.md", soort: "welzijn" },
];

// 1) Alles wat al gemaild/bekend is.
function lees(p) { try { return fs.readFileSync(p, "utf8"); } catch { return ""; } }
const bekend = new Set();
function voegToe(tekst) { for (const m of tekst.matchAll(EMAIL_RE)) bekend.add(m[0].toLowerCase()); }
for (const map of [`${ROOT}/docs/outreach`, `${ROOT}/docs/gemeenten`]) {
  for (const f of fs.readdirSync(map)) {
    if (f.startsWith("SPOOR2-")) continue; // de nieuwe lijsten zelf niet (spoor 1 telt mee als al gemaild)
    if (/\.(md|json|txt|log)$/i.test(f)) voegToe(lees(path.join(map, f)));
  }
}
voegToe(lees(`${ROOT}/docs/LEERGELD-OUTREACH.md`));
voegToe(lees(`${ROOT}/docs/BULKMAIL-PLAN.md`));
voegToe(lees(`${OUT}/opvolgbronnen-emails.txt`));
const nietMeer = new Set((lees(`${OUT}/NIET-MEER-MAILEN.md`).match(EMAIL_RE) || []).map((e) => e.toLowerCase()));
// Eigen/persoonlijke adressen nooit in een bulklijst.
const VERBODEN = /leerkwartier\.app$|smulsoft|marksmulders|mark-smulders|@gmail\.com$|@hotmail\.com$|@outlook\.com$|@live\.nl$|@ziggo\.nl$|@kpnmail\.nl$|@planet\.nl$|@home\.nl$|@yahoo\./i;

// 2) Research-tabel lezen: eerste kolom = organisatie, kolom met @ = e-mail; plaats/regio = tweede of derde kolom.
function leesLijst(p) {
  const rijen = [];
  for (const regel of lees(p).split(/\r?\n/)) {
    if (!regel.startsWith("|")) continue;
    const cellen = regel.split("|").slice(1, -1).map((c) => c.trim());
    if (cellen.length < 3 || /^-+$/.test(cellen[0]) || /^(groep|organisatie|#)$/i.test(cellen[0])) continue;
    const emailCel = cellen.find((c) => EMAIL_RE.test(c) && !/^https?:/i.test(c));
    if (!emailCel) continue;
    const email = (emailCel.match(EMAIL_RE) || [])[0]?.toLowerCase();
    // Organisatie = eerste cel die geen groepsnummer is.
    const org = cellen.find((c) => c && !/^\d+$/.test(c) && !EMAIL_RE.test(c) && !/^https?:/i.test(c)) || "";
    const nieuwsbrief = cellen.find((c) => /^(ja|nee|onbekend)/i.test(c)) || "";
    if (email && org) rijen.push({ org: org.replace(/\*/g, ""), email, nieuwsbrief });
  }
  return rijen;
}

const gezien = new Set();
let totaal = 0, dubbel = 0, overgeslagen = 0;
for (const b of BRONNEN) {
  const rijen = [].concat(b.in).flatMap((f) => leesLijst(`${OUT}/${f}`));
  const schoon = [];
  for (const r of rijen) {
    if (VERBODEN.test(r.email) || nietMeer.has(r.email)) { overgeslagen++; continue; }
    if (bekend.has(r.email) || gezien.has(r.email)) { dubbel++; continue; }
    gezien.add(r.email); schoon.push(r);
  }
  totaal += schoon.length;
  console.log(`${b.in}: ${rijen.length} gevonden → ${schoon.length} nieuw (dubbel/al gemaild ${rijen.length - schoon.length})`);
  if (TOON) { schoon.slice(0, 8).forEach((r) => console.log("   ", r.org, "<" + r.email + ">")); continue; }
  const doc = lees(`${OUT}/${b.uit}`);
  // De kop moet een echte markdown-kopregel zijn (begin van de regel), niet een vermelding in de toelichting.
  const m = doc.match(/^## Adressen[ \t]*$/m);
  if (!m) { console.error(`${b.uit}: geen '## Adressen'-kopregel — overgeslagen`); continue; }
  const kop = doc.slice(0, m.index) + "## Adressen\n\n| # | Organisatie | Soort | E-mail |\n|---|---|---|---|\n";
  const tabel = schoon.map((r, i) => `| ${i + 1} | ${r.org.replace(/\|/g, "/")} | ${b.soort}${r.nieuwsbrief ? " · nieuwsbrief " + r.nieuwsbrief.toLowerCase() : ""} | ${r.email} |`).join("\n");
  fs.writeFileSync(`${OUT}/${b.uit}`, kop + tabel + "\n");
}
console.log(`\nTotaal nieuw te mailen: ${totaal} · dubbel/al gemaild: ${dubbel} · verboden/afgemeld: ${overgeslagen} · bekende adressen: ${bekend.size}`);
