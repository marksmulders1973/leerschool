// Kliktocht HUIDIGE koppel-reis (code van main @ b8ea17a, lokaal met nagebootste Supabase).
// Moeder op telefoon (390×844) + kind op een ander apparaat (ook telefoonformaat).
// Gebruik: node scripts/audit/ouderadvies/huidigeReis.mjs [poort=4174]
import { chromium } from "playwright";
import { writeFileSync } from "node:fs";
import { koppelStub, maakStore, maakLog, ouderSessie, TELEFOON, CHROMIUM } from "./stubServer.mjs";

const POORT = process.argv[2] || "4174";
const BASIS = `http://localhost:${POORT}`;
const LABEL = process.argv[3] || "huidig";
const MAP = `docs/audit/ouderadvies/${LABEL}`;
const store = maakStore();
const b = await chromium.launch({ executablePath: CHROMIUM });

const moederCtx = await b.newContext(TELEFOON);
await koppelStub(moederCtx, store, { naam: "moeder", voorstelLive: false });
const kindCtx = await b.newContext(TELEFOON);
await koppelStub(kindCtx, store, { naam: "kind", voorstelLive: false });
const m = await moederCtx.newPage();
const k = await kindCtx.newPage();
const L = maakLog(MAP, LABEL);
const tekst = async (p) => (await p.evaluate(() => document.body.innerText)).replace(/\s+/g, " ");

try {
  // ── Moeder ──
  await m.goto(BASIS + "/"); await m.waitForTimeout(1500);
  await L.stap(m, "Moeder: startpagina (telefoon)");
  await m.getByRole("button", { name: "ouder of verzorger" }).click(); await m.waitForTimeout(1500);
  await L.stap(m, "Moeder: tikt 'ouder of verzorger' — wat ziet ze?");
  const t1 = await tekst(m);
  L.notitie(`Na 'ouder of verzorger': URL ${m.url()} · inlog-muur zichtbaar: ${/inlog|Log in|Google|e-mail/i.test(t1)}`);
  await m.evaluate(() => window.scrollTo(0, 99999)); await m.waitForTimeout(400);
  await L.stap(m, "Moeder: onderkant van die pagina");

  // Inloggen kan in deze test niet (e-mail/Google). Zo gaat het ná het inloggen:
  await m.evaluate((s) => localStorage.setItem("sb-protostub-auth-token", JSON.stringify(s)), ouderSessie());
  await m.goto(BASIS + "/ouder"); await m.waitForTimeout(2500);
  await L.stap(m, "Moeder: na inloggen (nagebootst) — Gezinsstart stap 1");
  const naamVeld = m.getByPlaceholder("Voornaam").first();
  if (await naamVeld.count()) {
    await naamVeld.fill("Testkind");
    await m.getByRole("button", { name: "Groep 7" }).first().click();
    await L.stap(m, "Moeder: voornaam + groep ingevuld");
    await m.getByRole("button", { name: "Verder" }).click(); await m.waitForTimeout(500);
    await L.stap(m, "Moeder: stap 2 — nadruk kiezen (5 keuzes + vrij veld)");
    await m.getByRole("button", { name: "Rekenen", exact: true }).click();
    await m.getByRole("button", { name: "Verder" }).click(); await m.waitForTimeout(500);
    await L.stap(m, "Moeder: stap 3 — welk apparaat?");
    await m.getByRole("button", { name: /Nee, op een ander apparaat/ }).click(); await m.waitForTimeout(1200);
    await L.stap(m, "Moeder: na 'Nee, op een ander apparaat'");
    const wizardNog = await m.locator("[data-gezinsstart]").count();
    const c0 = Object.keys(store.codes)[0];
    const zichtbaar = c0 ? (await tekst(m)).includes(c0) : false;
    L.notitie(`Wizard nog open na kiezen 'ander apparaat': ${wizardNog > 0} · code ergens op het scherm: ${zichtbaar}`);
    if (c0) { await m.getByText(c0).first().scrollIntoViewIfNeeded().catch(() => {}); await L.stap(m, "Moeder: waar staat de code?"); }
  } else {
    L.notitie("Gezinsstart-wizard verscheen niet na nagebootst inloggen.");
  }
  const code = Object.keys(store.codes)[0];
  L.notitie(`Koppelcode aangemaakt: ${code ? "ja (6 tekens)" : "NEE"}`);
  const t2 = await tekst(m);
  L.notitie(`Instructie aan moeder noemt knop 'Koppel met ouder': ${t2.includes("Koppel met ouder")} · noemt 'Code gekregen?': ${t2.includes("Code gekregen?")}`);

  // ── Kind op ander apparaat ──
  await k.goto(BASIS + "/"); await k.waitForTimeout(1500);
  await L.stap(k, "Kind: opent de app op eigen telefoon");
  L.notitie(`Kind ziet ergens 'Koppel met ouder': ${(await tekst(k)).includes("Koppel met ouder")}`);
  await k.getByRole("button", { name: /Code gekregen/ }).click(); await k.waitForTimeout(300);
  // Zoals het uit WhatsApp wordt overgetypt: met een spatie in het midden.
  const metSpatie = code ? `${code.slice(0, 3)} ${code.slice(3)}` : "ABC 123";
  await k.locator(".lk-codebalk-input").fill(metSpatie);
  await k.getByRole("button", { name: "Activeren" }).click(); await k.waitForTimeout(1200);
  await L.stap(k, `Kind: typt code mét spatie ("${metSpatie.replace(/\w/g, "X")}")`);
  L.notitie(`Melding bij code met spatie: "${(await tekst(k)).match(/(Die code klopt[^.]*\.|Deze code[^.]*\.|Gekoppeld[^!]*!)/)?.[0] || "geen"}"`);
  await k.locator(".lk-codebalk-input").fill(code || "ABC123");
  await k.getByRole("button", { name: "Activeren" }).click(); await k.waitForTimeout(1200);
  await L.stap(k, "Kind: typt code zonder spatie (nog geen naam op dit apparaat)");
  L.notitie(`Kind krijgt: "${(await tekst(k)).match(/Dit is een koppelcode[^]*?onthouden\./)?.[0] || "?"}"`);
  // Kind volgt het advies: 'leerling' → naam → leerling-pagina, waar de banner automatisch koppelt.
  await k.getByRole("button", { name: "leerling", exact: true }).first().click(); await k.waitForTimeout(1500);
  await L.stap(k, "Kind: tikt 'leerling'");
  const kindTekst = await tekst(k);
  L.notitie(`Na 'leerling': URL ${k.url()} · vraagt om naam: ${/naam/i.test(kindTekst)}`);
  const naamIn = k.locator("input").filter({ hasNot: k.locator(".lk-codebalk-input") }).first();
  if (await naamIn.count()) {
    await naamIn.fill("Testkind"); await naamIn.press("Enter"); await k.waitForTimeout(1500);
    await L.stap(k, "Kind: naam ingevuld");
    const kl = k.getByRole("button", { name: /Groep 7|groep 7|^7$/ }).first();
    if (await kl.count()) { await kl.click(); await k.waitForTimeout(1500); await L.stap(k, "Kind: groep gekozen"); }
  }
  // Kind belandt in een start-kwartier; de koppeling gebeurt pas op de eigen pagina.
  L.notitie(`Na naam: kind gekoppeld? ${store.links.some((l) => l.verified)} · scherm: ${(await tekst(k)).slice(0, 60)}`);
  const stop = k.getByRole("button", { name: /Stop/ }).first();
  if (await stop.count()) { await stop.click(); await k.waitForTimeout(2000); await L.stap(k, "Kind: tikt 'Stop' in het start-kwartier"); }
  await k.waitForTimeout(1500);
  const na = await tekst(k);
  L.notitie(`Kind gekoppeld (link in store): ${store.links.some((l) => l.verified)} · feestscherm zichtbaar: ${/Gelukt! Je bent gekoppeld/.test(na)}`);
  await L.stap(k, "Kind: eindstand");

  // ── Twee keer koppelen (code is eenmalig) ──
  if (code) {
    const k2 = await kindCtx.newPage();
    await k2.goto(BASIS + "/mijn"); await k2.waitForTimeout(2000);
    const andere = k2.getByRole("button", { name: "Andere code" });
    if (await andere.count()) {
      await andere.click();
      await k2.getByPlaceholder("ABC123").fill(code);
      await k2.getByRole("button", { name: /Koppel/ }).click(); await k2.waitForTimeout(1200);
      await L.stap(k2, "Kind: dezelfde code nog eens (al gekoppeld)");
      L.notitie(`Melding bij 2e keer: "${(await tekst(k2)).match(/Deze code[^.]*\.[^.]*\./)?.[0] || "?"}"`);
    } else {
      L.notitie("Kon 'Andere code' op /mijn niet vinden voor de dubbel-koppel-test.");
    }
  }

  // ── Moeder ziet het kind? ──
  await m.goto(BASIS + "/ouder"); await m.waitForTimeout(2500);
  await L.stap(m, "Moeder: overzicht na koppelen (kind heeft nog niets gedaan)");
  const mt = await tekst(m);
  L.notitie(`Moeder ziet 'Testkind': ${mt.includes("Testkind")} · tekst bij 'nog niets gedaan' noemt inloggen met hetzelfde account: ${/inloggen met hetzelfde account/.test(mt)} · nieuwe tekst 'nog niet geoefend': ${/Heeft Testkind nog niet geoefend\?/.test(mt)}`);
} catch (e) {
  L.notitie("FOUT in kliktocht: " + e.message.split("\n")[0]);
  await L.stap(m, "Moeder: stand bij fout").catch(() => {});
  await L.stap(k, "Kind: stand bij fout").catch(() => {});
}

writeFileSync(`${MAP}/testlog.json`, JSON.stringify({ wanneer: new Date().toISOString(), code: LABEL === "huidig" ? "main @ b8ea17a (lokaal)" : "branch audit3/ouderadvies (lokaal)", regels: L.regels, serverlog: store.log.filter((x) => /rpc|link_codes|klaargezet/.test(x)) }, null, 2));
for (const r of L.regels) console.log(r.notitie ? `   · ${r.notitie}` : `${String(r.nr).padStart(2)}. ${r.titel} — ${r.sec}s (${r.bestand})`);
await b.close();
