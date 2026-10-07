// Kliktocht audit deel 6 "Schermen & teksten" (7 okt 2026).
// Lokale build + nagebootste Supabase (zie ../ouderadvies/stubServer.mjs: leerkwartier.app en
// Supabase geven in deze omgeving HTTP 403). Telefoon 390×844, elk onderdeel op een VERS apparaat.
// Gebruik: node scripts/audit/schermen/kliktocht.mjs <label: voor|na> [poort] [alleen-routes,komma]
// Uitvoer: docs/audit/schermen/<label>/*.png + docs/audit/schermen/<label>/testlog.json
//          en de volledige schermtekst per stap in <label>/tekst/*.txt (voor het naleeswerk).
import { chromium } from "playwright";
import { mkdirSync, writeFileSync } from "node:fs";
import { koppelStub, maakStore, TELEFOON, CHROMIUM } from "../ouderadvies/stubServer.mjs";
import { PAGE_TO_PATH } from "../../../src/app/routes.js";

const LABEL = process.argv[2] || "voor";
const BASIS = `http://localhost:${process.argv[3] || "4173"}`;
const ALLEEN = process.argv[4] && process.argv[4] !== "rollen" ? process.argv[4].split(",") : null;
const ALLEEN_ROLLEN = process.argv[4] === "rollen";
const MAP = `docs/audit/schermen/${LABEL}`;
mkdirSync(`${MAP}/tekst`, { recursive: true });
const b = await chromium.launch({ executablePath: CHROMIUM });
const log = [];

async function vers({ plaatjesUit = false } = {}) {
  const ctx = await b.newContext(TELEFOON);
  await koppelStub(ctx, maakStore(), {});
  if (plaatjesUit) await ctx.route(/\.(png|jpe?g|webp|gif|svg|avif)(\?|$)/i, (r) => r.abort());
  const p = await ctx.newPage();
  p._fouten = [];
  p.on("pageerror", (e) => p._fouten.push(e.message.slice(0, 160)));
  return { ctx, p };
}
const tekst = (p) => p.evaluate(() => (document.querySelector("#root") || document.body).innerText.replace(/\n{2,}/g, "\n"));
async function stap(p, id, titel) {
  const t = await tekst(p).catch(() => "");
  await p.screenshot({ path: `${MAP}/${id}.png` });
  writeFileSync(`${MAP}/tekst/${id}.txt`, `# ${titel}\n# ${p.url()}\n${t}`);
  log.push({ id, titel, url: p.url().replace(BASIS, ""), tekens: t.length, fouten: [...p._fouten] });
  p._fouten.length = 0;
}
const wacht = (p, ms = 1500) => p.waitForTimeout(ms);
// Eerst op rol (knop), anders op zichtbare tekst (sommige keuzekaarten zijn geen <button>).
const klik = async (p, re) => {
  for (const k of [p.getByRole("button", { name: re }).first(), p.getByText(re).first()]) {
    if (await k.count()) { try { await k.click({ timeout: 4000 }); return true; } catch { /* volgende */ } }
  }
  return false;
};

// Fout antwoord geven op het eerste keuzescherm dat we zien: kies een optie die NIET de som-uitkomst is,
// en anders de eerste optie. Leest daarna de feedback. Max n vragen.
async function antwoordFout(p, id, n = 3) {
  for (let i = 1; i <= n; i++) {
    const vraag = await tekst(p);
    const som = vraag.match(/(\d+)\s*([+\-×x:])\s*(\d+)\s*\?/);
    let goed = null;
    if (som) { const [a, o, c] = [Number(som[1]), som[2], Number(som[3])]; goed = String(o === "+" ? a + c : o === "-" ? a - c : o === ":" ? a / c : a * c); }
    const opties = p.locator("main button, #root button").filter({ hasNotText: /Stop|Klopt er iets|terug|Verder|Volgende|Home|Leren|Toets|Spelletje|Mijn pagina|Lees voor|🔊/ });
    const teksten = await opties.allInnerTexts();
    const idx = teksten.findIndex((t) => t.trim() && t.trim().length < 40 && t.trim() !== goed);
    if (idx < 0) { log.push({ id: `${id}-fout${i}`, notitie: "geen antwoordknoppen gevonden" }); return; }
    await opties.nth(idx).click({ timeout: 4000 }).catch(() => {});
    await wacht(p, 1200);
    await stap(p, `${id}-fout${i}`, `Expres fout antwoord (${teksten[idx].trim()}) — feedback lezen`);
    if (!(await klik(p, /Verder|Volgende|Ga door|Nog een/))) return;
    await wacht(p, 900);
  }
}

// ── 1. Alle routes op een vers apparaat ──
const routes = ALLEEN_ROLLEN ? [] : Object.entries(PAGE_TO_PATH).filter(([k]) => !ALLEEN || ALLEEN.includes(k));
let nr = 0;
for (const [key, pad] of routes) {
  nr++;
  const { ctx, p } = await vers();
  try { await p.goto(BASIS + pad, { waitUntil: "domcontentloaded" }); await wacht(p, 2200); await stap(p, `r${String(nr).padStart(2, "0")}-${key}`, `Route ${pad} (vers apparaat)`); }
  catch (e) { log.push({ id: `r-${key}`, url: pad, notitie: "laadfout " + e.message.slice(0, 120) }); }
  await ctx.close();
}

if (!ALLEEN) {
  // ── 2. Rollen ──
  async function kind(groepKnop, label, typeKnop) {
    const { ctx, p } = await vers();
    await p.goto(BASIS + "/"); await wacht(p);
    await klik(p, typeKnop ? /^Student/ : /^Leerling/); await wacht(p, 800);
    await p.getByPlaceholder(/naam/i).first().fill(`Test${label}`).catch(() => {});
    await klik(p, new RegExp(`^${groepKnop}$`));
    if (typeKnop) await klik(p, new RegExp(`^${typeKnop}$`));
    await stap(p, `k-${label}-01`, `${label}: naam + niveau ingevuld`);
    await klik(p, /Doorgaan als gast/); await wacht(p, 2000);
    await stap(p, `k-${label}-02`, `${label}: eerste scherm na 'Doorgaan als gast'`);
    await antwoordFout(p, `k-${label}-03`, 5);
    await wacht(p, 1500); await stap(p, `k-${label}-04`, `${label}: na het start-kwartier`);
    for (const [i, pad] of ["/mijn", "/vandaag-kwartier", "/leren"].entries()) { await p.goto(BASIS + pad); await wacht(p, 2000); await stap(p, `k-${label}-1${i}`, `${label}: ${pad} na start`); }
    await ctx.close();
  }
  await kind("4", "groep4");
  await kind("8", "groep8");
  await kind("1", "brugklas", "HAVO/VWO");

  // Groep 8: Doorstroomtoets-oefentoets fout beantwoorden
  { const { ctx, p } = await vers(); await p.goto(BASIS + "/doorstroomtoets-oefentoets"); await wacht(p, 2500);
    await stap(p, "g8-toets-01", "Groep 8: Doorstroomtoets-oefentoets"); await klik(p, /Start|Begin/); await wacht(p, 1500);
    await antwoordFout(p, "g8-toets-02", 3); await ctx.close(); }

  // Een leerpad: twee keer fout → uitleg moet op 'simpeler' openen
  { const { ctx, p } = await vers(); await p.goto(BASIS + "/leren"); await wacht(p, 2500);
    await stap(p, "pad-01", "Leren-overzicht");
    const tegel = p.locator("#root button").filter({ hasText: /min/ }).first();
    if (await tegel.count()) { await tegel.click().catch(() => {}); await wacht(p, 2500); await stap(p, "pad-02", "Eerste leertegel geopend");
      await klik(p, /Start|Begin|Ga beginnen|Daar gaan we/); await wacht(p, 1500); await stap(p, "pad-03", "Na start");
      await antwoordFout(p, "pad-04", 3); }
    await ctx.close(); }

  // Ouder/verzorger
  { const { ctx, p } = await vers(); await p.goto(BASIS + "/"); await wacht(p);
    await klik(p, /ouder of verzorger/); await wacht(p, 1800); await stap(p, "ouder-01", "Ouder: tikt 'ouder of verzorger'");
    await p.goto(BASIS + "/ouder"); await wacht(p, 2000); await stap(p, "ouder-02", "Ouder: /ouder op vers apparaat (niet ingelogd)");
    await p.goto(BASIS + "/kwartiercheck"); await wacht(p, 2000); await stap(p, "ouder-03", "Ouder: Kwartiercheck");
    await ctx.close(); }

  // Nieuwkomer
  { const { ctx, p } = await vers(); await p.goto(BASIS + "/"); await wacht(p);
    await p.getByText("Ik ben nieuwkomer").first().click().catch(() => {}); await wacht(p, 2000);
    await stap(p, "nieuwk-01", "Nieuwkomer: na 'Ik ben nieuwkomer'");
    const tegel = p.locator("#root button").nth(3); await tegel.click().catch(() => {}); await wacht(p, 1800);
    await stap(p, "nieuwk-02", "Nieuwkomer: eerste oefening");
    await antwoordFout(p, "nieuwk-03", 2); await ctx.close(); }

  // Leerkracht via /klas
  { const { ctx, p } = await vers(); await p.goto(BASIS + "/klas"); await wacht(p, 2200); await stap(p, "juf-01", "Leerkracht: /klas");
    await p.goto(BASIS + "/leerkracht"); await wacht(p, 2200); await stap(p, "juf-02", "Leerkracht: /leerkracht");
    await ctx.close(); }

  // ── 3. Plaatjes geblokkeerd ──
  for (const [i, pad] of ["/", "/nieuwkomers", "/tafelbladen", "/dierentuin", "/mijn"].entries()) {
    const { ctx, p } = await vers({ plaatjesUit: true }); await p.goto(BASIS + pad); await wacht(p, 2500);
    await stap(p, `geenplaatjes-${i + 1}`, `Plaatjes geblokkeerd: ${pad}`); await ctx.close();
  }
}
writeFileSync(`${MAP}/testlog${ALLEEN_ROLLEN ? "-rollen" : ""}.json`, JSON.stringify(log, null, 1));
console.log(`${log.length} stappen; ${log.filter((l) => l.fouten?.length).length} met JS-fout; schermafbeeldingen in ${MAP}`);
await b.close();
