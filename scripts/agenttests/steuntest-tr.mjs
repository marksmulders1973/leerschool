// Steuntaal-test Turks (tr) — Nieuwkomer-pakket, live site. Alleen lezen/klikken, geen app-code.
import { chromium } from "playwright";
import fs from "fs";
const SCR = "C:/Users/mark-/AppData/Local/Temp/claude/C--Users-mark-/e750ede8-6dd1-46d2-bd69-48da94596b10/scratchpad";
const BASE = "https://leerkwartier.app";
const log = (...a) => console.log(...a);
const b = await chromium.launch({ headless: true });
const c = await b.newContext({ viewport: { width: 420, height: 900 }, locale: "nl-NL" });
const p = await c.newPage();
const sleep = (ms) => p.waitForTimeout(ms);
const clickBtn = (re) => p.evaluate((src) => { const r = new RegExp(src); const el = [...document.querySelectorAll("button")].find((x) => r.test(x.innerText)); if (el) { el.click(); return el.innerText.trim(); } return null; }, re.source);
const body = () => p.evaluate(() => document.body.innerText);
const q = (sel) => p.locator(sel).count();
const trTexts = () => p.evaluate(() => [...document.querySelectorAll('[lang="tr"]')].map((e) => e.innerText.trim()));
const hasStatus = () => p.evaluate(() => !!document.querySelector('[role="status"]') || /Dat is juist|Nog niet helemaal/.test(document.body.innerText));
const overflow = () => p.evaluate(() => ({ sw: document.documentElement.scrollWidth, cw: document.documentElement.clientWidth }));
const diak = (s) => /[şğıİçöüŞĞÇÖÜ]/.test(s);

// ---------- 1. /nieuwkomers + taalkeuze ----------
log("=== 1. /nieuwkomers ===");
await p.goto(BASE + "/nieuwkomers", { waitUntil: "networkidle" });
await sleep(800);
log("versie:", (await body()).match(/versie \d+/)?.[0]);
const btns = await p.evaluate(() => [...document.querySelectorAll("button")].map((x) => x.innerText.trim()).filter(Boolean));
log("knoppen op /nieuwkomers:", JSON.stringify(btns));
const klik = await clickBtn(/Türkçe/);
await sleep(500);
log("Türkçe geklikt:", klik, "| lk_steuntaal =", await p.evaluate(() => localStorage.getItem("lk_steuntaal")));
const t = await body();
const checks = { taalvraag: "Evde hangi dili konuşuyorsun", taaluitleg: "Her şey Hollandaca kalır", intro: "hâlâ Hollandaca öğrenen", voorlees: "sesli oku" };
for (const [k, v] of Object.entries(checks)) log(`  Turks onder ${k}:`, t.includes(v) ? "JA" : "NEE");
log("  overflow:", JSON.stringify(await overflow()));
await p.screenshot({ path: SCR + "/tr-01-nieuwkomers.png", fullPage: true });

// ---------- 1b. code-ingang ----------
log("=== 1b. code-ingang op / ===");
for (const code of ["nieuwkomer", "welkom nieuwkomers", "WELKOMNIEUWKOMER"]) {
  await p.goto(BASE + "/", { waitUntil: "networkidle" });
  await sleep(800);
  const opened = await clickBtn(/Code gekregen/);
  await sleep(400);
  const inputs = await p.evaluate(() => [...document.querySelectorAll("input")].map((i) => i.placeholder || i.className));
  const inp = p.locator("input.lk-codebalk-input, input[placeholder*='CODE' i]").first();
  if (!(await inp.count())) { log(`  "${code}": GEEN code-input gevonden (open-knop: ${opened}; inputs: ${JSON.stringify(inputs)})`); continue; }
  await inp.fill(code);
  const val = await inp.inputValue();
  await inp.press("Enter");
  await sleep(2500);
  const fout = await p.evaluate(() => { const el = [...document.querySelectorAll("div")].find((d) => d.children.length === 0 && d.innerText.length < 200 && getComputedStyle(d).color === "rgb(180, 35, 24)"); return el ? el.innerText : null; });
  log(`  "${code}" (in veld: "${val}") → url: ${p.url()}${fout ? " | foutmelding: " + fout : ""}`);
}

// ---------- 2/3. leerpaden ----------
const PADEN = ["in-de-klas-nieuwkomers", "woorden-nieuwkomers", "rekenen-tot-20-nieuwkomers", "rekenen-tot-100-nieuwkomers"];
const rapport = {};
for (const pad of PADEN) {
  log(`\n=== PAD ${pad} ===`);
  const rows = [];
  const obs = [];
  await p.goto(BASE + "/leren/pad?id=" + pad, { waitUntil: "networkidle" });
  await sleep(1500);
  log("  lk_steuntaal:", await p.evaluate(() => localStorage.getItem("lk_steuntaal")));
  const b1 = await clickBtn(/Begin bij deel 1/);
  await sleep(900);
  log("  klik:", b1);
  log("  uitleg-scherm deel 1: tikbare zinnen =", await q('[role="button"][title="Tik voor jouw taal"]'), "| lang=tr =", await q('[lang="tr"]'));
  await p.screenshot({ path: `${SCR}/tr-${pad}-uitleg1.png`, fullPage: true });
  const nv = await clickBtn(/Naar de vra|Volgend deel ▶/);
  await sleep(1300);
  log("  klik:", nv);
  let vraagNr = 0, shot = false, iter = 0, deel = 1;
  while (iter++ < 120) {
    const nAns = await q("button.lk-answer-btn");
    if (nAns > 0) {
      vraagNr++;
      const vraagTekst = await p.evaluate(() => { const el = document.querySelector('[role="button"][title="Tik voor jouw taal"]') || document.querySelector('[lang="tr"]')?.parentElement; return (el ? el.innerText : "?").split("\n")[0].slice(0, 70); });
      const tikbaar = await q('[role="button"][title="Tik voor jouw taal"]');
      const trVoor = await trTexts();
      let vertaling = "-", verdwijnt = "-", trQ = "";
      if (tikbaar) {
        await p.evaluate(() => document.querySelector('[role="button"][title="Tik voor jouw taal"]').click());
        await sleep(250);
        const trNa = await trTexts();
        vertaling = trNa.length > trVoor.length ? "ja" : "NEE";
        trQ = trNa[0] || "";
        await p.evaluate(() => document.querySelector('[role="button"][title="Tik voor jouw taal"]').click());
        await sleep(250);
        verdwijnt = (await trTexts()).length === trVoor.length ? "ja" : "NEE";
      }
      const altijd = trVoor.length > 0;
      if (altijd && !trQ) trQ = trVoor[0];
      const nKnop = await q('button[aria-label="Vertaal dit antwoord"]');
      let knopOk = 0, knopFout = [], gekozenNaKnop = false, trA = "";
      for (let k = 0; k < nKnop; k++) {
        const voor = (await trTexts()).length;
        await p.evaluate((k) => document.querySelectorAll('button[aria-label="Vertaal dit antwoord"]')[k].click(), k);
        await sleep(250);
        const na = await trTexts();
        if (na.length > voor) { knopOk++; if (!trA) trA = na[na.length - 1]; } else knopFout.push(k);
        if (await hasStatus()) gekozenNaKnop = true;
        await p.evaluate((k) => document.querySelectorAll('button[aria-label="Vertaal dit antwoord"]')[k].click(), k);
        await sleep(150);
      }
      const opm = [];
      if (nKnop !== nAns) opm.push(`knopjes ${nKnop} ≠ antwoorden ${nAns}`);
      if (knopFout.length) opm.push(`knopje zonder vertaling: ${knopFout.join(",")}`);
      if (gekozenNaKnop) opm.push("ANTWOORD GEKOZEN na vertaal-knopje!");
      if (altijd) opm.push("eigen taal altijd zichtbaar (zonder tik)");
      if (trQ && !diak(trQ)) opm.push("geen Turkse diakrieten in vraagvertaling (kan kloppen)");
      const ov = await overflow();
      if (ov.sw > ov.cw) opm.push(`HORIZONTALE OVERFLOW ${ov.sw}>${ov.cw}`);
      rows.push({ deel, nr: vraagNr, vraag: vraagTekst, tikbaar: tikbaar ? "ja" : "nee", vertaling, verdwijnt, antwoorden: nAns, knopjes: nKnop, opm: opm.join("; "), trQ: trQ.slice(0, 70), trA: trA.slice(0, 40) });
      // screenshot met vertaling open (vraag + 1 antwoord)
      if (!shot && (tikbaar || altijd)) {
        if (tikbaar) await p.evaluate(() => document.querySelector('[role="button"][title="Tik voor jouw taal"]').click());
        if (nKnop) await p.evaluate(() => document.querySelectorAll('button[aria-label="Vertaal dit antwoord"]')[0].click());
        await sleep(300);
        await p.evaluate(() => document.querySelector('button.lk-answer-btn')?.scrollIntoView({ block: "center" }));
        await sleep(200);
        await p.screenshot({ path: `${SCR}/tr-${pad}-vraag${vraagNr}.png`, fullPage: false });
        await p.screenshot({ path: `${SCR}/tr-${pad}-vraag${vraagNr}-full.png`, fullPage: true });
        shot = true;
        if (tikbaar) await p.evaluate(() => document.querySelector('[role="button"][title="Tik voor jouw taal"]').click());
        if (nKnop) await p.evaluate(() => document.querySelectorAll('button[aria-label="Vertaal dit antwoord"]')[0].click());
        await sleep(200);
      }
      // antwoord kiezen: eerste knop; bij fout → Probeer opnieuw → volgende knop
      let pogingen = 0, goed = false;
      for (let a = 0; a < nAns && !goed; a++) {
        await p.evaluate((a) => document.querySelectorAll("button.lk-answer-btn")[a].click(), a);
        await sleep(900);
        pogingen++;
        const bt = await body();
        if (/Dat is juist/.test(bt)) { goed = true; break; }
        if (/Nog niet helemaal/.test(bt)) {
          const r = await clickBtn(/Probeer opnieuw/);
          if (!r) { obs.push(`vraag ${vraagNr}: geen 'Probeer opnieuw'-knop gevonden`); break; }
          await sleep(500);
        } else { obs.push(`vraag ${vraagNr}: na klik antwoord ${a} geen ✅/❌ zichtbaar`); }
      }
      rows[rows.length - 1].pogingen = pogingen + (goed ? "" : " (nooit goed?)");
      await sleep(1600); // auto-doorschakelen na goed antwoord (1100 ms)
      continue;
    }
    // geen vraag zichtbaar: stepDone / reading / allDone / mini-quiz?
    const bt = await body();
    const btnInfo = await p.evaluate(() => [...document.querySelectorAll("button")].map((x) => ({ t: x.innerText.trim().slice(0, 40), title: x.title })).filter((x) => x.t || x.title));
    const next = await p.evaluate(() => { const bs = [...document.querySelectorAll("button")]; const el = bs.find((x) => /^VOLGEND DEEL/.test(x.innerText)) || bs.find((x) => /Klaar — bekijk|🏁/.test(x.innerText + x.title)) || bs.find((x) => /Naar de vra|Volgend deel ▶/.test(x.innerText)); if (el) { el.click(); return el.innerText.trim().replace(/\n/g, " | "); } return null; });
    if (next) {
      if (/^VOLGEND DEEL/.test(next)) { deel++; await sleep(900); log(`  → volgend deel via '${next}' | uitleg-scherm tikbaar=`, await q('[role="button"][title="Tik voor jouw taal"]'), "lang=tr=", await q('[lang="tr"]')); const nv2 = await clickBtn(/Naar de vra|Volgend deel ▶/); log("  klik:", nv2); }
      else log(`  → klik '${next}'`);
      await sleep(1300);
      continue;
    }
    log("  EINDE pad — geen vraag/volgende knop. Knoppen:", JSON.stringify(btnInfo.slice(0, 12)), "| tekst:", bt.slice(0, 200).replace(/\n/g, " / "));
    await p.screenshot({ path: `${SCR}/tr-${pad}-einde.png`, fullPage: true });
    break;
  }
  rapport[pad] = { rows, obs };
  log("  rijen:");
  for (const r of rows) log(`   D${r.deel} V${r.nr} · tikbaar ${r.tikbaar} · vert ${r.vertaling}/weg ${r.verdwijnt} · antw ${r.antwoorden} · knopjes ${r.knopjes} · pog ${r.pogingen} · ${r.opm} · "${r.vraag}" → "${r.trQ}" | A: "${r.trA}"`);
  if (obs.length) log("  obs:", obs.join(" | "));
}
fs.writeFileSync(SCR + "/tr-rapport.json", JSON.stringify(rapport, null, 2));

// ---------- 5. leesladder + tafels ----------
for (const pg of ["leesladder", "tafels"]) {
  log(`\n=== /${pg} ===`);
  await p.goto(BASE + "/" + pg, { waitUntil: "networkidle" });
  await sleep(1500);
  log("  lang=tr:", await q('[lang="tr"]'), "| tikbaar:", await q('[role="button"][title="Tik voor jouw taal"]'), "| overflow:", JSON.stringify(await overflow()));
  log("  tekst:", (await body()).slice(0, 500).replace(/\n+/g, " / "));
  await p.screenshot({ path: `${SCR}/tr-${pg}.png`, fullPage: true });
}
await b.close();
