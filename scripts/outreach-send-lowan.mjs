import fs from "node:fs";
const env = fs.readFileSync("C:/Users/mark-/.claude/resend-lokaal.env","utf8");
const KEY = (env.match(/RESEND_API_KEY\s*=\s*"?([^"\r\n]+)/)||[])[1];
if (!KEY) { console.error("geen key"); process.exit(1); }
const doc = fs.readFileSync("docs/outreach/LOWAN-BATCH-1-CONCEPT.md","utf8");
const body = doc.split("## Tekst (per school: [school] en [plaats] invullen)")[1].split("## Batch 1")[0].trim();
const rows = [...doc.matchAll(/^\|\s*(\d+)\s*\|\s*([^|]+?)\s*\|\s*([^|]*?)\s*\|\s*([\w.+-]+@[\w.-]+)\s*\|/gm)].map(m=>({n:+m[1],school:m[2],plaats:m[3],email:m[4]}));
const MAX = +(process.argv[2]||45);
const todo = rows.slice(0, MAX);
const log = [];
for (const r of todo) {
  const text = body.replace(/\[school\]/g, r.school).replace(/\[plaats\]/g, r.plaats==="—"?"":r.plaats);
  const html = "<div style=\"font-family:Segoe UI,Arial,sans-serif;font-size:15px;line-height:1.55;color:#1a2233\">" + text.split(/\n\n/).map(p=>"<p>"+p.replace(/\n/g," ").replace(/(leerkwartier\.app[\w\/.\-]*|linkedin\.com\/company\/leerkwartier)/g,'<a href="https://$1">$1</a>')+"</p>").join("") + "</div>";
  const resp = await fetch("https://api.resend.com/emails", { method:"POST", headers:{ Authorization:`Bearer ${KEY}`, "Content-Type":"application/json" },
    body: JSON.stringify({ from: "Mark Smulders — Leerkwartier <hallo@leerkwartier.app>", reply_to: "hallo@leerkwartier.app", to: [r.email],
      subject: "Gratis oefen-app met voorleesknop en uitleg in simpele taal — voor uw nieuwkomers (groep 3-8)", text, html }) });
  const ok = resp.ok; let id=""; try { id = (await resp.json()).id || ""; } catch {}
  log.push(`${r.n}\t${r.school}\t${r.email}\t${ok?"OK":"FOUT "+resp.status}\t${id}`);
  console.log(log[log.length-1]);
  await new Promise(res=>setTimeout(res, 1300));
}
const ok = log.filter(l=>l.includes("\tOK\t")).length;
const stamp = new Date().toLocaleString("nl-NL",{timeZone:"Europe/Amsterdam"});
fs.appendFileSync("docs/outreach/LOWAN-BATCH-1-CONCEPT.md", `\n- **${stamp}** — via Resend (hallo@leerkwartier.app), ${ok}/${todo.length} verstuurd (rij 1-${todo[todo.length-1].n}).\n` + log.map(l=>"  - "+l.replace(/\t/g," · ")).join("\n") + "\n");
console.log("KLAAR", ok, "/", todo.length);
