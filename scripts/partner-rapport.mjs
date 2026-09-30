// 📄 Partner-rapport per partnercode → één A4 (HTML + PDF) voor de gemeente/organisatie.
// Mark 30 sep 2026 ("ga rapport"): het bewijsstuk voor gemeentegesprekken. Cijfers komen uit de
// RPC partner_rapport(code) (alleen totalen, geen persoonsgegevens). Apparaten ≠ kinderen: dat
// staat er eerlijk bij (feedback_eerlijke_getallen_naar_buiten).
//
//   node scripts/partner-rapport.mjs OOIEVAAR2027            → docs/rapporten/partner-OOIEVAAR2027-<datum>.html + .pdf
//   node scripts/partner-rapport.mjs --alle                  → alle codes met ≥1 scan
//   node scripts/partner-rapport.mjs CODE --geen-pdf
import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";

const ROOT = path.resolve(new URL(".", import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1"), "..");
const env = Object.fromEntries(fs.readFileSync(path.join(ROOT, ".env"), "utf8").split(/\r?\n/).filter((l) => l.includes("=")).map((l) => { const i = l.indexOf("="); return [l.slice(0, i).trim(), l.slice(i + 1).trim().replace(/^"|"$/g, "")]; }));
const URL_ = env.VITE_SUPABASE_URL, KEY = env.VITE_SUPABASE_ANON_KEY;
if (!URL_ || !KEY) { console.error("Geen VITE_SUPABASE_URL/ANON_KEY in .env"); process.exit(1); }
const CHROME = "C:/Program Files/Google/Chrome/Application/chrome.exe";
const UIT = path.join(ROOT, "docs", "rapporten");
fs.mkdirSync(UIT, { recursive: true });

const args = process.argv.slice(2);
const geenPdf = args.includes("--geen-pdf");
const codes = args.includes("--alle") ? await alleCodes() : args.filter((a) => !a.startsWith("--")).map((c) => c.toUpperCase());
if (!codes.length) { console.error("Geef een code of --alle"); process.exit(1); }

async function rpc(naam, body) {
  const r = await fetch(`${URL_}/rest/v1/rpc/${naam}`, { method: "POST", headers: { apikey: KEY, Authorization: `Bearer ${KEY}`, "Content-Type": "application/json" }, body: JSON.stringify(body) });
  if (!r.ok) throw new Error(`${naam}: ${r.status} ${await r.text()}`);
  return r.json();
}
async function alleCodes() {
  const rijen = await rpc("partner_codes_actief", {}); // codes met ≥1 scan, niet slapend
  return rijen.map((r) => r.code);
}

const nl = (n) => new Intl.NumberFormat("nl-NL").format(n || 0);
const datum = (s, opt = { day: "numeric", month: "long", year: "numeric" }) => (s ? new Date(s).toLocaleDateString("nl-NL", opt) : "—");
const vandaag = new Date().toISOString().slice(0, 10);
const esc = (s) => String(s ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const padNaam = (id) => String(id || "").replace(/-po$|-nieuwkomers$/, "").replace(/^opwarm-g\d$/, "opwarmvragen").replace(/-/g, " ");

function html(d) {
  const pct = d.sommen ? Math.round(100 * d.sommen_goed / d.sommen) : null;
  const maxW = Math.max(1, ...d.weken.map((w) => w.apparaten));
  const weken = d.weken.length
    ? d.weken.map((w) => `<div class="wk"><div class="bar" style="height:${Math.max(6, Math.round(70 * w.apparaten / maxW))}px"></div><div class="wl">${datum(w.week, { day: "numeric", month: "short" })}</div><div class="wn">${w.apparaten}</div></div>`).join("")
    : `<p class="muted">Nog geen activiteit in de laatste acht weken.</p>`;
  const top = d.top.length ? `<ol>${d.top.map((t) => `<li>${esc(padNaam(t.pad))} <span class="muted">· ${nl(t.n)} vragen</span></li>`).join("")}</ol>` : `<p class="muted">Nog geen oefenvragen via deze code.</p>`;
  const trechter = [["Flyer of scherm gescand", d.gescand], ["Code vastgezet (Familie gratis)", d.geclaimd], ["Daarna echt geoefend", d.oefende], ["Op 2 of meer dagen terug", d.terugkomers]];
  return `<!doctype html><html lang="nl"><head><meta charset="utf-8"><title>Leerkwartier — rapport ${esc(d.code)}</title>
<style>
  @page { size: A4; margin: 16mm 16mm 14mm; }
  * { box-sizing: border-box; } body { font-family: "Segoe UI", system-ui, sans-serif; color: #0f2a44; margin: 0; font-size: 12.5px; line-height: 1.45; }
  .kop { display: flex; align-items: center; gap: 14px; border-bottom: 3px solid #2e9d57; padding-bottom: 10px; margin-bottom: 14px; }
  .kop img { width: 58px; height: 58px; border-radius: 14px; object-fit: contain; background: #fff; border: 1px solid #dfe5ee; }
  .kop h1 { margin: 0; font-size: 22px; } .kop .slogan { margin: 2px 0 0; color: #2e9d57; font-weight: 700; font-size: 12.5px; }
  .titel { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 10px; }
  .titel h2 { margin: 0; font-size: 18px; } .titel .datum { color: #5a6b7d; font-size: 12px; }
  .cijfers { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; margin: 10px 0 14px; }
  .c { background: #f3f7fb; border-radius: 12px; padding: 10px 12px; } .c b { display: block; font-size: 24px; color: #0f2a44; } .c span { color: #5a6b7d; font-size: 11.5px; }
  h3 { font-size: 13.5px; margin: 14px 0 6px; color: #1d3f7a; }
  table { width: 100%; border-collapse: collapse; } td { padding: 5px 0; border-bottom: 1px solid #e6ecf3; } td:last-child { text-align: right; font-weight: 700; }
  .weken { display: flex; gap: 6px; align-items: flex-end; height: 100px; padding: 6px 0 0; }
  .wk { flex: 1; text-align: center; font-size: 10px; color: #5a6b7d; } .bar { background: #2e9d57; border-radius: 4px 4px 0 0; margin: 0 6px; } .wn { font-weight: 700; color: #0f2a44; }
  ol { margin: 0; padding-left: 18px; } li { padding: 2px 0; }
  .muted { color: #5a6b7d; } .noot { font-size: 11px; color: #5a6b7d; border-top: 1px solid #e6ecf3; padding-top: 8px; margin-top: 14px; }
  .twee { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
</style></head><body>
<div class="kop"><img src="file:///${ROOT.replace(/\\/g, "/")}/public/logo.jpg" alt=""><div><h1>Leerkwartier</h1><p class="slogan">Een kwartier per dag leren, een leven lang slimmer.</p></div></div>
<div class="titel"><h2>${esc(d.org_naam || d.code)}</h2><span class="datum">code ${esc(d.code)} · stand ${datum(vandaag)}</span></div>
<p>Dit rapport laat zien wat er via de code <b>${esc(d.code)}</b> is gebeurd sinds ${datum(d.sinds)}. Oefenen is voor deze kinderen gratis; met de code krijgt het gezin bovendien de Familie-extra's${d.familie_tot ? ` tot en met ${datum(d.familie_tot)}` : ""}.</p>
<div class="cijfers">
  <div class="c"><b>${nl(d.gescand)}</b><span>apparaten die de code openden</span></div>
  <div class="c"><b>${nl(d.sommen)}</b><span>oefenvragen beantwoord${pct != null ? ` · ${pct}% goed` : ""}</span></div>
  <div class="c"><b>${nl(d.kwartieren)}</b><span>volle kwartieren afgemaakt</span></div>
  <div class="c"><b>${nl(d.terugkomers)}</b><span>apparaten op 2+ dagen terug</span></div>
</div>
<div class="twee">
  <div><h3>Van scan tot oefenen</h3><table>${trechter.map(([l, n]) => `<tr><td>${l}</td><td>${nl(n)}</td></tr>`).join("")}<tr><td>Actieve dagen (apparaat × dag)</td><td>${nl(d.actieve_dagen)}</td></tr><tr><td>Eerste · laatste activiteit</td><td>${datum(d.eerste, { day: "numeric", month: "short" })} · ${datum(d.laatste, { day: "numeric", month: "short" })}</td></tr></table></div>
  <div><h3>Waar werd aan geoefend</h3>${top}</div>
</div>
<h3>Apparaten per week (laatste 8 weken)</h3>
<div class="weken">${weken}</div>
<p class="noot"><b>Zo lezen we de cijfers.</b> Leerkwartier vraagt geen account of naam; we tellen apparaten, niet kinderen. Eén kind op twee apparaten telt dubbel, twee kinderen op één tablet tellen als één. Eigen tests en mailscanners zijn eruit gefilterd. Cijfers zijn een ondergrens: een kind dat zonder code oefent, telt hier niet mee.<br>
Vragen over dit rapport: hallo@leerkwartier.app · leerkwartier.app · KvK 42176244</p>
</body></html>`;
}

for (const code of codes) {
  const d = await rpc("partner_rapport", { p_code: code });
  if (!d.code) { console.log(`${code}: onbekende code`); continue; }
  const basis = path.join(UIT, `partner-${d.code}-${vandaag}`);
  fs.writeFileSync(basis + ".html", html(d));
  let pdf = "";
  if (!geenPdf && fs.existsSync(CHROME)) {
    try {
      execFileSync(CHROME, ["--headless=new", "--disable-gpu", "--no-pdf-header-footer", `--print-to-pdf=${basis}.pdf`, "--user-data-dir=" + path.join(process.env.TEMP || ".", "chrome-pdf-partner"), "file:///" + (basis + ".html").replace(/\\/g, "/")], { stdio: "ignore", timeout: 60000 });
      pdf = " + pdf";
    } catch (e) { pdf = " (pdf mislukt: " + e.message.split("\n")[0] + ")"; }
  }
  console.log(`${d.code} (${d.org_naam || "?"}): ${d.gescand} gescand · ${d.sommen} vragen · ${d.kwartieren} kwartieren → ${path.relative(ROOT, basis)}.html${pdf}`);
}
