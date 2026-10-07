// Kliktocht PROTOTYPE ouderadvies in de drie gezinssituaties (lokaal, nagebootste Supabase).
// Gebruik: node scripts/audit/ouderadvies/prototypeTest.mjs [poort=4173]
//  (a) zelfde apparaat · (b) koppelcode op eigen telefoon · (c) schoolcomputer met kind-sleutel
//  + koppelcode-randgevallen + "server-opslag nog niet live" (terugval naar alleen dit apparaat).
import { chromium } from "playwright";
import { writeFileSync, mkdirSync } from "node:fs";
import { koppelStub, maakStore, maakLog, ouderSessie, TELEFOON, CHROMIUM, OUDER } from "./stubServer.mjs";

const POORT = process.argv[2] || "4173";
const BASIS = `http://localhost:${POORT}`;
const MAP = "docs/audit/ouderadvies/prototype";
mkdirSync(MAP, { recursive: true });
const b = await chromium.launch({ executablePath: CHROMIUM });
const uitkomst = [];
const check = (naam, ok, detail = "") => { uitkomst.push({ naam, ok: !!ok, detail }); console.log(`${ok ? "✅" : "❌"} ${naam}${detail ? " — " + detail : ""}`); };
const tekst = async (p) => (await p.evaluate(() => document.body.innerText)).replace(/\s+/g, " ");

/** Eén blokje doorlopen: afwisselend optie 0 en "weet ik niet", tot het blok klaar is. */
async function doeBlok(p, L, label) {
  let n = 0;
  await p.waitForSelector("[data-fase=vraag]", { timeout: 8000 });
  await L.stap(p, `${label}: eerste vraag`);
  while (await p.locator("[data-fase=vraag]").count()) {
    if (n % 3 === 2) await p.locator("[data-weet-niet]").click();
    else await p.locator("[data-optie]").nth(n % 2).click();
    n += 1;
    await p.waitForTimeout(150);
    if (n > 20) break;
  }
  await p.waitForSelector("[data-fase=blokklaar]", { timeout: 8000 });
  return n;
}

// ════════ (a) ZELFDE APPARAAT ════════
{
  const store = maakStore();
  const ctx = await b.newContext(TELEFOON);
  await koppelStub(ctx, store, { naam: "gedeeld" });
  const p = await ctx.newPage();
  const L = maakLog(MAP, "a");
  await p.goto(`${BASIS}/ouderadvies?proto=1`); await p.waitForSelector("[data-ouderadvies]");
  await L.stap(p, "Gedeeld apparaat: wie gaat er oefenen? (leeg)");
  await p.locator("[data-kind-toevoegen]").click();
  await p.getByPlaceholder("Voornaam").fill("Testkind");
  await p.getByRole("button", { name: "Groep 7" }).click();
  await L.stap(p, "Kind toevoegen: voornaam + groep");
  await p.getByRole("button", { name: "Toevoegen" }).click();
  await p.locator("[data-profiel=Testkind]").waitFor();
  await p.locator("[data-kind-toevoegen]").click();
  await p.getByPlaceholder("Voornaam").fill("Testbroer");
  await p.getByRole("button", { name: "Groep 4" }).click();
  await p.getByRole("button", { name: "Toevoegen" }).click();
  await p.locator("[data-profiel=Testbroer]").waitFor();
  await L.stap(p, "Twee kinderprofielen, wisselen zonder inloggen");
  check("(a) twee kinderprofielen op één apparaat", await p.locator("[data-profiel]").count() === 2);

  // Ouderdeel achter de drempel
  await p.locator("[data-ouder-knop]").click();
  await p.locator("[data-drempel=som]").waitFor();
  await p.getByLabel("Antwoord").fill("7");
  await p.getByRole("button", { name: "Verder" }).click();
  await L.stap(p, "Drempel: fout antwoord (kind probeert het)");
  check("(a) drempel houdt fout antwoord tegen", (await tekst(p)).includes("Dat klopt niet") && await p.locator("[data-drempel]").count() === 1);
  const som = await p.locator("[data-som]").innerText();
  const [x, y] = som.replace("= ?", "").split("×").map((s) => parseInt(s, 10));
  await p.getByLabel("Antwoord").fill(String(x * y));
  await p.getByRole("button", { name: "Verder" }).click();
  await p.locator("[data-ouder-kind=Testkind]").waitFor();
  await L.stap(p, "Ouderweergave: eerste advies = nulmeting");
  const t0 = await tekst(p);
  check("(a) advies-zin letterlijk zoals de maker vroeg", t0.includes("Ik adviseer je om Testkind te laten beginnen met een korte basistest, een nulmeting. Dan weten we ongeveer hoe het gaat."));
  check("(a) eerlijk: geen cijfer, geen niveau", t0.includes("Het is geen cijfer en geen niveau."));

  // Kind begint (vanuit de ouder) — blok 1
  await p.locator("[data-ouder-kind=Testkind]").getByRole("button", { name: "Laat Testkind beginnen" }).click();
  await p.locator("[data-fase=intro]").waitFor();
  await L.stap(p, "Kind: uitleg nulmeting (geen toets)");
  await p.locator("[data-start-blok=\"1\"]").click();
  const n1 = await doeBlok(p, L, "Kind blok 1 (rekenen)");
  await L.stap(p, "Kind: blokje 1 klaar — wil je nog een?");
  check("(a) blok 1 bewaard en kind krijgt keuze 'nog een?'", (await tekst(p)).includes("Wil je nog een blokje doen") , `${n1} vragen`);
  const lokaal1 = await p.evaluate(() => JSON.parse(localStorage.getItem("lk_nulmeting") || "{}"));
  check("(a) blok 1 staat in de opslag zodra het af is", !!lokaal1.testkind?.blokken?.["1"]);
  await p.getByRole("button", { name: "Nee, ik stop" }).click();
  await L.stap(p, "Kind stopt na blok 1");

  // Zelfde dag terug: standaard één blok per dag
  await p.locator("[data-terug]").click();
  await p.locator("[data-profiel=Testkind]").click();
  await p.locator("[data-fase=intro]").waitFor();
  await L.stap(p, "Kind komt dezelfde dag terug: 'morgen weer' (mag toch)");
  check("(a) standaard één blok per dag, wel 'toch nu verder'", (await tekst(p)).includes("Voor vandaag is één blokje genoeg"));

  // Ouder: voorlopig voorstel na blok 1
  await p.locator("[data-terug]").click();
  await p.locator("[data-ouder-knop]").click();
  await p.locator("[data-drempel]").waitFor();
  const som2 = await p.locator("[data-som]").innerText();
  const [x2, y2] = som2.replace("= ?", "").split("×").map((s) => parseInt(s, 10));
  await p.getByLabel("Antwoord").fill(String(x2 * y2));
  await p.getByRole("button", { name: "Verder" }).click();
  await p.locator("[data-ouder-stand=voorlopig]").waitFor();
  await p.locator("[data-ouder-kind=Testkind] [data-voorstel]").first().scrollIntoViewIfNeeded();
  await L.stap(p, "Ouder: voorlopig voorstel na blok 1");
  const kaarten = p.locator("[data-ouder-kind=Testkind] [data-voorstel]");
  check("(a) na blok 1 precies één voorlopig voorstel", await kaarten.count() === 1);
  const eerste = await kaarten.first().getAttribute("data-voorstel");
  await kaarten.first().getByRole("button").first().click();
  await L.stap(p, "Ouder tikt op het voorstel: twee alternatieven");
  const alts = p.locator("[data-ouder-kind=Testkind] [data-alternatief]");
  check("(a) wisselen toont twee alternatieven", await alts.count() === 2);
  const gekozen = await alts.nth(0).getAttribute("data-alternatief");
  await alts.nth(0).click();
  const nu = await p.locator("[data-ouder-kind=Testkind] [data-voorstel]").first().getAttribute("data-voorstel");
  await L.stap(p, "Ouder heeft gewisseld");
  check("(a) één tik wisselt het voorstel", nu === gekozen && nu !== eerste, `${eerste} → ${nu}`);
  await p.locator("[data-ouder-kind=Testkind] [data-goed-zo]").click();
  await L.stap(p, "Ouder: 'Goed zo'");
  check("(a) zonder account: keuze bewaard op dit apparaat", await p.locator("[data-akkoord=lokaal]").count() === 1);

  // Pincode instellen; daarna vraagt de drempel om de pincode
  await p.getByLabel("Nieuwe pincode").fill("4826");
  await p.getByRole("button", { name: "Pincode bewaren" }).click();
  await p.locator("[data-terug]").click();
  await p.locator("[data-ouder-knop]").click();
  await p.locator("[data-drempel=pin]").waitFor();
  await L.stap(p, "Drempel vraagt nu om de pincode");
  await p.getByLabel("Pincode").fill("4826");
  await p.getByRole("button", { name: "Verder" }).click();
  check("(a) pincode werkt", await p.locator("[data-ouder-kind=Testkind]").waitFor({ timeout: 5000 }).then(() => true, () => false));

  // Kind maakt blok 2 en 3 dezelfde dag af ("toch nu verder" + "ja, nog een")
  await p.locator("[data-terug]").click();
  await p.locator("[data-profiel=Testkind]").click();
  await p.getByRole("button", { name: "Toch nu verder" }).click();
  await p.locator("[data-start-blok=\"2\"]").click();
  await doeBlok(p, L, "Kind blok 2 (begrijpend lezen)");
  await p.getByRole("button", { name: "Ja, nog een" }).click();
  await doeBlok(p, L, "Kind blok 3 (studievaardigheden)");
  await L.stap(p, "Kind: blok 3 klaar");
  await p.locator("[data-fase=blokklaar] button").first().click();
  await p.locator("[data-fase=alles]").waitFor();
  await L.stap(p, "Kind: alle drie klaar + wat er voor je klaarstaat");
  check("(a) kind ziet de gekozen les bij 'voor jou klaargezet'", (await tekst(p)).includes("Voor jou klaargezet") && (await p.locator("[data-fase=alles] button").count()) >= 1);

  await p.locator("[data-terug]").click();
  await p.locator("[data-ouder-knop]").click();
  await p.getByLabel("Pincode").fill("4826");
  await p.getByRole("button", { name: "Verder" }).click();
  await p.locator("[data-ouder-kind=Testkind]").waitFor();
  await p.locator("[data-ouder-kind=Testkind] [data-ouder-stand=drietal] [data-voorstel]").first().scrollIntoViewIfNeeded();
  await L.stap(p, "Ouder: na 3 blokjes — het drietal");
  check("(a) na 3 blokjes: drietal (3 voorstellen), eerdere wissel blijft staan", await p.locator("[data-ouder-kind=Testkind] [data-voorstel]").count() === 3 && await p.locator("[data-ouder-kind=Testkind] [data-voorstel=kommagetallen-po]").count() === 1);
  await p.locator("[data-ouder-kind=Testkind] [data-goed-zo]").click();
  // Herladen: het ouderdeel blijft 15 minuten open in dit tabblad (drempel niet opnieuw).
  await p.reload(); await p.locator("[data-ouder-knop]").click();
  if (await p.locator("[data-drempel]").count()) { await p.getByLabel("Pincode").fill("4826"); await p.getByRole("button", { name: "Verder" }).click(); }
  await p.locator("[data-ouder-kind=Testkind] [data-week]").waitFor({ timeout: 5000 }).catch(() => {});
  await p.locator("[data-ouder-kind=Testkind] [data-week]").scrollIntoViewIfNeeded().catch(() => {});
  await L.stap(p, "Ouder: na 'Goed zo' op het drietal → wekelijks vervolg (kind deed nog niets)");
  check("(a) na goedkeuren drietal: wekelijks vervolg, zonder schuldgevoel als er niets gedaan is", (await tekst(p)).includes("Dat gebeurt. Het voorstel van vorige week blijft gewoon staan."));
  const t3 = await tekst(p);
  check("(a) ouder ziet uitslag per vak in woorden (geen cijfer)", /gaat goed|wankel|nog niet/.test(t3) && !/\d+ ?%/.test(t3.split("Testkind")[1] || ""));
  writeFileSync(`${MAP}/a-testlog.json`, JSON.stringify(L.regels, null, 2));
  await ctx.close();
}

// ════════ (b) KOPPELCODE + (c) SCHOOL ════════
{
  const store = maakStore();
  const mCtx = await b.newContext(TELEFOON);
  await koppelStub(mCtx, store, { naam: "moeder" });
  await mCtx.addInitScript((s) => { try { if (!localStorage.getItem("sb-protostub-auth-token")) localStorage.setItem("sb-protostub-auth-token", s); } catch { /* */ } }, JSON.stringify(ouderSessie()));
  const kCtx = await b.newContext(TELEFOON);
  await koppelStub(kCtx, store, { naam: "kind-telefoon" });
  const sCtx = await b.newContext(TELEFOON);
  await koppelStub(sCtx, store, { naam: "schoolcomputer" });
  const m = await mCtx.newPage();
  const k = await kCtx.newPage();
  const s = await sCtx.newPage();
  const L = maakLog(MAP, "b");

  // Moeder maakt (bestaande Gezinsstart) een koppeling + code
  await m.goto(`${BASIS}/ouder`); await m.getByPlaceholder("Voornaam").first().waitFor({ timeout: 8000 });
  await m.getByPlaceholder("Voornaam").first().fill("Testkind");
  await m.getByRole("button", { name: "Groep 7" }).first().click();
  await m.getByRole("button", { name: "Verder" }).click();
  await m.getByRole("button", { name: "Laat de app kiezen" }).click();
  await m.getByRole("button", { name: "Verder" }).click();
  await m.getByRole("button", { name: /Nee, op een ander apparaat/ }).click();
  await m.waitForTimeout(800);
  await L.stap(m, "Moeder: code voor Testkind (eigen telefoon)");
  const code = Object.keys(store.codes)[0];
  check("(b) moeder krijgt een koppelcode in de wizard", !!code && (await tekst(m)).includes(code));

  // Kind op eigen telefoon — met spatie, kleine letters en naam met hoofdletter/spatie
  await k.goto(`${BASIS}/ouderadvies?proto=1`); await k.locator("[data-code-open]").click();
  await k.getByLabel("Jouw voornaam").fill(" testkind ");
  await k.getByLabel("Code").fill(`${code.slice(0, 3).toLowerCase()} ${code.slice(3)}`);
  await L.stap(k, "Kind (eigen telefoon): code met spatie + naam in kleine letters");
  await k.getByRole("button", { name: "Koppel" }).click();
  await k.locator("[data-koppel-melding]").waitFor();
  await L.stap(k, "Kind: gekoppeld");
  check("(b) code met spatie/kleine letters koppelt", (await k.locator("[data-koppel-melding]").getAttribute("data-koppel-melding")) === "ok");
  check("(b) naam van de koppeling wint (één kind, geen 'testkind'-dubbel)", store.links.filter((l) => l.parent === OUDER.id).length === 1 && await k.locator("[data-profiel=Testkind]").count() === 1);

  // Twee keer dezelfde code
  await k.getByLabel("Code").fill(code);
  await k.getByRole("button", { name: "Koppel" }).click();
  await k.waitForTimeout(500);
  await L.stap(k, "Randgeval: dezelfde code nog eens");
  check("(rand) tweede keer dezelfde code: 'al gekoppeld' i.p.v. 'werkt niet'", (await tekst(k)).includes("al gekoppeld"));
  // Verlopen code
  store.codes.VRLP23 = { parent: OUDER.id, child_name: "Testkind", expires: Date.now() - 1000, used: false };
  await k.getByLabel("Jouw voornaam").fill("Testnieuw");
  await k.getByLabel("Code").fill("VRLP23");
  await k.getByRole("button", { name: "Koppel" }).click(); await k.waitForTimeout(500);
  await L.stap(k, "Randgeval: verlopen code");
  check("(rand) verlopen code: uitleg in gewone taal", (await tekst(k)).includes("48 uur geldig en werkt één keer"));

  // Kind doet blok 1 op de eigen telefoon en stopt
  await k.locator("[data-profiel=Testkind]").click();
  await k.locator("[data-start-blok=\"1\"]").click();
  await doeBlok(k, L, "Kind (telefoon) blok 1");
  await L.stap(k, "Kind (telefoon): blok 1 klaar, bewaard op de server");
  check("(b) blok 1 op de server bewaard (kan op ander apparaat verder)", await k.locator("[data-opslag=true]").count() === 1 && !!store.nulmeting[store.links[0].id]?.[1]);
  await k.getByRole("button", { name: "Nee, ik stop" }).click();

  // Moeder op haar eigen telefoon: voorlopig voorstel, geen drempel nodig
  await m.goto(`${BASIS}/ouderadvies?proto=1`); await m.locator("[data-ouder-knop]").click();
  await m.locator("[data-ouder-kind=Testkind] [data-ouder-stand=voorlopig]").waitFor({ timeout: 8000 });
  await m.locator("[data-ouder-kind=Testkind] [data-voorstel]").first().scrollIntoViewIfNeeded();
  await L.stap(m, "Moeder (eigen telefoon): voorlopig voorstel na blok 1");
  check("(b) moeder ziet het voorlopige voorstel op haar eigen telefoon", await m.locator("[data-ouder-kind=Testkind] [data-voorstel]").count() === 1);
  await m.locator("[data-goed-zo]").click();
  await m.locator("[data-akkoord]").waitFor();
  await L.stap(m, "Moeder: 'Goed zo' → klaargezet voor Testkind");
  check("(b) 'Goed zo' zet de les klaar via de bestaande klaarzet-tabel", (await m.locator("[data-akkoord]").getAttribute("data-akkoord")) === "server" && store.klaargezet.length === 1);
  await m.getByRole("button", { name: "Toon de kind-sleutel" }).click();
  await m.waitForTimeout(400);
  await L.stap(m, "Moeder: kind-sleutel voor school");
  const sleutel = store.links[0].sleutel;
  check("(c) moeder krijgt een kind-sleutel van 8 tekens", sleutel?.length === 8);

  // (c) Schoolcomputer: kind tikt de kind-sleutel in en gaat verder bij blok 2
  await s.goto(`${BASIS}/ouderadvies?proto=1`); await s.locator("[data-code-open]").click();
  await s.getByLabel("Jouw voornaam").fill("Testkind");
  await s.getByLabel("Code").fill(sleutel);
  await s.getByText("Dit is een computer van school").click();
  await L.stap(s, "School: kind-sleutel + 'computer van school'");
  await s.getByRole("button", { name: "Koppel" }).click();
  await s.locator("[data-profiel=Testkind]").click();
  await s.locator("[data-fase=intro]").waitFor();
  await L.stap(s, "School: 'Ga verder met blokje 2' (thuis gestopt na blok 1)");
  check("(c) school weet dat blok 2 openstaat", (await s.locator("[data-fase=intro]").getAttribute("data-open-blok")) === "2");
  const toch = s.getByRole("button", { name: "Toch nu verder" });
  if (await toch.count()) await toch.click();
  await s.locator("[data-start-blok=\"2\"]").click();
  await doeBlok(s, L, "School blok 2");
  await s.getByRole("button", { name: "Nee, ik stop" }).click();
  await s.locator("[data-vergeet-mij]").click();
  await L.stap(s, "School: 'vergeet mij' na afloop");
  const rest = await s.evaluate(() => ({ k: localStorage.getItem("lk_koppelingen"), n: localStorage.getItem("lk_namen"), m: localStorage.getItem("lk_nulmeting") }));
  check("(c) schoolcomputer is het kind weer vergeten", !/testkind/i.test(rest.k || "") && !/Testkind/.test(rest.n || "") && !/testkind/.test(rest.m || ""));

  // Terug op de eigen telefoon: blok 3 staat open
  await k.reload(); await k.locator("[data-profiel=Testkind]").click();
  await k.locator("[data-fase=intro]").waitFor();
  await L.stap(k, "Kind (telefoon) volgende dag: blokje 3 staat open");
  check("(b/c) telefoon weet dat blok 2 op school is gedaan", (await k.locator("[data-fase=intro]").getAttribute("data-open-blok")) === "3");

  // Moeder ziet blok 2 van school
  await m.reload(); await m.locator("[data-ouder-knop]").click();
  await m.locator("[data-ouder-kind=Testkind]").waitFor();
  await L.stap(m, "Moeder: ziet ook het blok van school");
  check("(b/c) moeder ziet 2 van 3 blokjes", (await m.locator("[data-ouder-kind=Testkind]").innerText()).includes("nog niet gedaan") && Object.keys(store.nulmeting[store.links[0].id] || {}).length === 2);
  writeFileSync(`${MAP}/bc-testlog.json`, JSON.stringify(L.regels, null, 2));
  await mCtx.close(); await kCtx.close(); await sCtx.close();
}

// ════════ Server-opslag nog NIET live (zoals vandaag) ════════
{
  const store = maakStore();
  store.links.push({ id: "11111111-1111-4111-8111-111111111111", parent: OUDER.id, child_name: "Testkind", verified: true, groep: "6" });
  store.codes.ABC234 = { parent: OUDER.id, child_name: "Testkind", expires: Date.now() + 3600e3, used: false };
  const ctx = await b.newContext(TELEFOON);
  await koppelStub(ctx, store, { naam: "zonder-voorstel", voorstelLive: false });
  const p = await ctx.newPage();
  const L = maakLog(MAP, "x");
  await p.goto(`${BASIS}/ouderadvies?proto=1`); await p.locator("[data-code-open]").click();
  await p.getByLabel("Jouw voornaam").fill("Testkind"); await p.getByLabel("Code").fill("ABC-234");
  await p.getByRole("button", { name: "Koppel" }).click(); await p.locator("[data-profiel=Testkind]").click();
  await p.locator("[data-start-blok=\"1\"]").click();
  await doeBlok(p, L, "Zonder server-opslag: blok 1");
  await L.stap(p, "Zonder server-opslag: 'Bewaard op dit apparaat'");
  check("(terugval) zonder de nieuwe RPC's: netjes lokaal bewaard, geen foutmelding", await p.locator("[data-opslag=niet-beschikbaar]").count() === 1);
  // Voorbeeld wekelijks vervolg met verzonnen gegevens (?demo=week)
  await p.goto(`${BASIS}/ouderadvies?proto=1&demo=week`); await p.locator("[data-week]").waitFor();
  await p.locator("[data-week]").scrollIntoViewIfNeeded();
  await L.stap(p, "Voorbeeld: wekelijks vervolg (dit ging goed / dit nog niet / volgende week)");
  const w = await tekst(p);
  check("(week) vervolg noemt goed, nog niet en voorstel voor volgende week", w.includes("Dit ging goed:") && w.includes("Dit nog niet:") && w.includes("Volgende week stel ik dit voor. Goed zo?"));
  await ctx.close();
}

writeFileSync(`${MAP}/uitkomst.json`, JSON.stringify({ wanneer: new Date().toISOString(), uitkomst }, null, 2));
const fout = uitkomst.filter((u) => !u.ok).length;
console.log(`\n${uitkomst.length - fout} van ${uitkomst.length} controles geslaagd`);
await b.close();
process.exit(fout ? 1 : 0);
