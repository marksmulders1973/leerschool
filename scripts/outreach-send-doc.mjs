// Generieke outreach-verzender op basis van een markdown-doc (23 sep 2026).
// Doc-opbouw: "## Onderwerp" (1 regel) · "## Tekst" (t/m de volgende "## ") met
// [ORGANISATIE] als plaatshouder · een tabel "| # | Organisatie | Soort | E-mail |".
// Gebruik: node scripts/outreach-send-doc.mjs <max> <doc.md>   (DRY=1 = niet versturen)
import fs from "node:fs";
const env = fs.readFileSync("C:/Users/mark-/.claude/resend-lokaal.env", "utf8");
const KEY = (env.match(/RESEND_API_KEY\s*=\s*"?([^"\r\n]+)/) || [])[1];
if (!KEY) { console.error("geen key"); process.exit(1); }
const MAX = +(process.argv[2] || 60);
const DOC = process.argv[3];
const DRY = process.env.DRY === "1";
const doc = fs.readFileSync(DOC, "utf8").replace(/\r\n/g, "\n");
const subject = (doc.split("## Onderwerp")[1] || "").split("\n").map(s => s.trim()).filter(Boolean)[0];
const body = doc.split("## Tekst")[1].split(/\n## /)[0].replace(/^[^\n]*\n/, "").trim();
const rows = [...doc.matchAll(/^\|\s*(\d+)\s*\|\s*([^|]+?)\s*\|\s*([^|]*?)\s*\|\s*([\w.+-]+@[\w.-]+)\s*\|/gm)].map(m => ({ n: +m[1], org: m[2], soort: m[3], email: m[4] }));
const todo = rows.slice(0, MAX);
if (!subject || !body || !todo.length) { console.error("doc onvolledig", { subject: !!subject, body: body.length, rows: rows.length }); process.exit(1); }
console.log("onderwerp:", subject, "| tekst:", body.length, "tekens | adressen:", todo.length, DRY ? "| DRY" : "");
const log = [];
for (const r of todo) {
  const text = body.replace(/\[ORGANISATIE\]|\[SCHOOL\]/g, r.org);
  const html = "<div style=\"font-family:Segoe UI,Arial,sans-serif;font-size:15px;line-height:1.55;color:#1a2233\">" + text.split(/\n\n/).map(p => "<p>" + p.replace(/\n/g, " ").replace(/(leerkwartier\.app[\w\/.\-]*)/g, '<a href="https://$1">$1</a>') + "</p>").join("") + "</div>";
  if (DRY) { console.log(`${r.n}\t${r.org}\t${r.email}\tDRY`); continue; }
  const resp = await fetch("https://api.resend.com/emails", { method: "POST", headers: { Authorization: `Bearer ${KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({ from: "Mark Smulders — Leerkwartier <hallo@leerkwartier.app>", reply_to: "hallo@leerkwartier.app", to: [r.email], subject, text, html }) });
  const ok = resp.ok; let id = ""; try { id = (await resp.json()).id || ""; } catch {}
  log.push(`${r.n}\t${r.org}\t${r.email}\t${ok ? "OK" : "FOUT " + resp.status}\t${id}`);
  console.log(log[log.length - 1]);
  await new Promise(res => setTimeout(res, 1300));
}
if (!DRY) {
  const ok = log.filter(l => l.includes("\tOK\t")).length;
  const stamp = new Date().toLocaleString("nl-NL", { timeZone: "Europe/Amsterdam" });
  fs.appendFileSync(DOC, `\n- **${stamp}** — via Resend (hallo@leerkwartier.app), ${ok}/${todo.length} verstuurd.\n` + log.map(l => "  - " + l.replace(/\t/g, " · ")).join("\n") + "\n");
  console.log("KLAAR", ok, "/", todo.length);
}
