// Steuntaal-test Arabisch (ar) — Nieuwkomer-pakket live. Alleen testscript, geen app-code.
import { chromium } from "playwright";
import fs from "fs";

const OUT = "C:/Users/mark-/AppData/Local/Temp/claude/C--Users-mark-/e750ede8-6dd1-46d2-bd69-48da94596b10/scratchpad";
const BASE = "https://leerkwartier.app";
const PADEN = ["in-de-klas-nieuwkomers", "woorden-nieuwkomers", "rekenen-tot-20-nieuwkomers", "rekenen-tot-100-nieuwkomers"];
const AR = /[\u0600-\u06FF]/;
const wait = (p, ms) => p.waitForTimeout(ms);
const log = (...a) => console.log(...a);
const rapport = { nieuwkomers: null, paden: {}, overig: {} };

const b = await chromium.launch({ headless: true });
const c = await b.newContext({ viewport: { width: 420, height: 900 }, locale: "nl-NL" });
const p = await c.newPage();
p.on("pageerror", (e) => log("PAGEERROR", e.message));

// helpers in page
const clickBtn = (re) => p.evaluate((src) => {
  const re = new RegExp(src);
  const el = [...document.querySelectorAll("button")].find((x) => re.test(x.innerText) && !x.disabled);
  if (!el) return null;
  el.click();
  return el.innerText.trim().slice(0, 60);
}, re.source);
const state = () => p.evaluate(() => {
  const q = (s) => document.querySelectorAll(s).length;
  const ar = [...document.querySelectorAll('[lang="ar"]')].map((e) => ({ dir: e.getAttribute("dir"), txt: e.innerText.trim().slice(0, 120) }));
  const status = [...document.querySelectorAll('[role="status"]')].map((e) => e.innerText.trim().slice(0, 60));
  const btns = [...document.querySelectorAll("button")].map((x) => x.innerText.trim().replace(/\s+/g, " ").slice(0, 40)).filter(Boolean);
  const vraagEl = document.querySelector('[role="button"][title="Tik voor jouw taal"]');
  return {
    tik: q('[role="button"][title="Tik voor jouw taal"]'),
    tikPressed: vraagEl?.getAttribute("aria-pressed"),
    vraagTxt: vraagEl ? vraagEl.firstElementChild?.firstElementChild?.innerText.trim().slice(0, 100) : null,
    antw: q("button.lk-answer-btn"),
    antwDisabled: q("button.lk-answer-btn:disabled"),
    antwTxt: [...document.querySelectorAll("button.lk-answer-btn")].map((x) => x.innerText.trim().slice(0, 40)),
    knop: q('button[aria-label="Vertaal dit antwoord"]'),
    ar, status, btns,
    bodyAr: /[\u0600-\u06FF]/.test(document.body.innerText),
    versie: document.body.innerText.match(/versie \d+/)?.[0] || null,
    hasCheck: !!(document.querySelector("button.lk-answer-btn")),
    txt: document.body.innerText.slice(0, 200).replace(/\s+/g, " "),
  };
});

// ---------- 1. /nieuwkomers ----------
await p.goto(`${BASE}/nieuwkomers`, { waitUntil: "networkidle" });
await wait(p, 1000);
const before = await p.evaluate(() => ({ ar: [...document.querySelectorAll('[dir="rtl"]')].length, txt: document.body.innerText.slice(0, 400) }));
const kl = await clickBtn(/العربية/);
await wait(p, 800);
const nk = await p.evaluate(() => {
  const rtl = [...document.querySelectorAll('[dir="rtl"]')].map((e) => ({ tag: e.tagName, lang: e.getAttribute("lang"), txt: e.innerText.trim().slice(0, 90) }));
  const arNoRtl = [...document.querySelectorAll("span,div,p,h1,h2,h3,button")].filter((e) => e.children.length === 0 && /[\u0600-\u06FF]/.test(e.innerText) && e.closest('[dir="rtl"]') == null).map((e) => e.innerText.trim().slice(0, 60));
  return { ls: localStorage.getItem("lk_steuntaal"), rtl, arNoRtl, pressed: [...document.querySelectorAll("button[aria-pressed='true']")].map((x) => x.innerText.trim()), txt: document.body.innerText.replace(/\s+/g, " ").slice(0, 900) };
});
rapport.nieuwkomers = { klik: kl, rtlBefore: before.ar, ...nk };
await p.screenshot({ path: `${OUT}/ar-nieuwkomers.png`, fullPage: true });
log("=== /nieuwkomers ===", JSON.stringify(rapport.nieuwkomers, null, 1));

// ---------- 2/3. paden ----------
for (const pad of PADEN) {
  const R = { vragen: [], obs: [], bugs: [], stappen: 0 };
  rapport.paden[pad] = R;
  await p.goto(`${BASE}/leren/pad?id=${pad}`, { waitUntil: "networkidle" });
  await wait(p, 1500);
  const s0 = await state();
  R.versie = s0.versie;
  R.overviewAr = s0.bodyAr;
  const begin = await clickBtn(/Begin bij deel 1/);
  R.begin = begin;
  if (!begin) { R.bugs.push(`Knop 'Begin bij deel 1' niet gevonden; knoppen: ${s0.btns.join(" | ")}`); continue; }
  await wait(p, 900);
  let stap = 0, iter = 0, lastKey = null, vraagNr = 0, autoOpenCheck = null;
  let screenshotsDone = 0;
  while (iter++ < 200) {
    const s = await state();
    if (s.hasCheck) {
      const key = `${stap}|${s.vraagTxt || s.antwTxt.join(",")}`;
      if (key === lastKey) { // zelfde vraag nog steeds (bv. na fout); antwoorden verder proberen
        await wait(p, 300);
      }
      if (key !== lastKey) {
        lastKey = key;
        vraagNr++;
        const V = { nr: vraagNr, stap, vraag: s.vraagTxt, tikbaar: s.tik > 0, antw: s.antw, knop: s.knop, opm: [] };
        R.vragen.push(V);
        // auto-open-observatie: stond de vertaling al open vóór een tik (state van vorige vraag)?
        V.arVoorTik = s.ar.length;
        if (autoOpenCheck && s.ar.length > 0 && s.tik > 0) V.opm.push(`vertaling stond al open vóór tik (state van vorige vraag, aria-pressed=${s.tikPressed})`);
        autoOpenCheck = false;
        // (b) altijd-zichtbaar (Woorden)?
        if (s.tik === 0 && s.ar.length > 0) { V.altijd = true; V.altijdRtl = s.ar.every((x) => x.dir === "rtl"); V.altijdTxt = s.ar[0].txt; }
        if (s.tik === 0 && s.ar.length === 0) V.opm.push("vraag NIET tikbaar en geen eigen taal zichtbaar");
        // (a) vraag tik
        if (s.tik > 0) {
          const alOpen = s.ar.length;
          if (alOpen === 0) {
            await p.evaluate(() => document.querySelector('[role="button"][title="Tik voor jouw taal"]').click());
            await wait(p, 250);
          }
          const s1 = await state();
          V.vertaling = s1.ar.length > 0;
          V.rtl = s1.ar.length > 0 && s1.ar.every((x) => x.dir === "rtl");
          V.arTxt = s1.ar[0]?.txt;
          V.geenAntwoordGekozen = s1.status.length === 0 && s1.antwDisabled === 0;
          if (!V.vertaling) V.opm.push("na tik geen lang=ar element");
          // sluit weer
          await p.evaluate(() => document.querySelector('[role="button"][title="Tik voor jouw taal"]').click());
          await wait(p, 250);
          const s2 = await state();
          V.sluit = s2.ar.length === 0;
          if (!V.sluit) V.opm.push("tweede tik sluit vertaling niet");
        }
        // (c) antwoordknopjes
        if (s.knop !== s.antw) V.opm.push(`knopjes ${s.knop} ≠ antwoorden ${s.antw}` + (s.antwTxt.every((t) => /^\d+$/.test(t)) ? " (alleen getallen → verwacht)" : ""));
        V.knopOk = 0; V.knopFout = [];
        for (let k = 0; k < s.knop; k++) {
          await p.evaluate((k) => document.querySelectorAll('button[aria-label="Vertaal dit antwoord"]')[k].click(), k);
          await wait(p, 200);
          const sk = await state();
          const nieuw = sk.ar.filter((x) => x.dir === "rtl");
          const ok = nieuw.length >= 1 && sk.status.length === 0 && sk.antwDisabled === 0 && !/Dat is juist|Nog niet helemaal/.test(sk.txt);
          if (ok) V.knopOk++; else V.knopFout.push({ k, ar: sk.ar.length, status: sk.status, disabled: sk.antwDisabled });
          if (k > 0) { // sluit vorige om niet alles open te laten (eerste blijft open voor screenshot)
            await p.evaluate((k) => document.querySelectorAll('button[aria-label="Vertaal dit antwoord"]')[k].click(), k);
            await wait(p, 120);
          }
        }
        if (V.knopFout.length) V.opm.push(`knopje-fouten: ${JSON.stringify(V.knopFout)}`);
        // screenshot: eerste vraag van elke stap met vraag + 1 antwoord open
        if (screenshotsDone < 6 && (vraagNr === 1 || R.vragen[R.vragen.length - 2]?.stap !== stap)) {
          if (s.tik > 0) { await p.evaluate(() => document.querySelector('[role="button"][title="Tik voor jouw taal"]').click()); await wait(p, 250); }
          const file = `${OUT}/ar-${pad}-stap${stap + 1}.png`;
          await p.screenshot({ path: file, fullPage: false });
          V.screenshot = file; screenshotsDone++;
          // laat vraag-vertaling open staan om auto-open bij volgende vraag te meten
          autoOpenCheck = true;
        } else if (s.knop > 0) {
          await p.evaluate(() => document.querySelectorAll('button[aria-label="Vertaal dit antwoord"]')[0]?.click());
        }
        // (d) antwoord kiezen: probeer op volgorde tot goed
        let goed = false;
        for (let a = 0; a < s.antw && !goed; a++) {
          await p.evaluate((a) => document.querySelectorAll("button.lk-answer-btn")[a]?.click(), a);
          await wait(p, 750);
          const sa = await state();
          if (/Dat is juist/.test(sa.txt) || sa.status.some((t) => /juist/.test(t))) { goed = true; V.goedBij = a + 1; await wait(p, 1500); break; }
          if (sa.status.some((t) => /Nog niet/.test(t)) || /Nog niet helemaal/.test(sa.txt)) {
            const r = await clickBtn(/Probeer opnieuw/);
            if (!r) { V.opm.push(`geen 'Probeer opnieuw' na fout; knoppen: ${sa.btns.join(" | ")}`); break; }
            await wait(p, 500);
          } else {
            V.opm.push(`na klik antwoord ${a + 1} geen ✅/❌ status; status=${JSON.stringify(sa.status)} txt=${sa.txt.slice(0, 120)}`);
            break;
          }
        }
        if (!goed) { V.opm.push("geen goed antwoord gevonden → stop dit pad"); R.bugs.push(`Vraag ${vraagNr} (stap ${stap + 1}): kon niet verder`); break; }
        continue;
      }
      await wait(p, 400);
      continue;
    }
    // geen vraag zichtbaar → uitleg (reading) of stepDone of allDone
    const naar = await clickBtn(/Naar de vra/);
    if (naar) {
      stap++; R.stappen = stap;
      R.obs.push(`Stap ${stap}: uitlegscherm — tikbare zinnen: ${s.tik}, Arabisch zichtbaar: ${s.bodyAr}`);
      await wait(p, 900); lastKey = null; continue;
    }
    const volgend = await clickBtn(/Volgend deel/);
    if (volgend) { await wait(p, 900); continue; }
    const afronden = await clickBtn(/Afronden|Klaar — bekijk/);
    if (afronden) { await wait(p, 900); R.klaar = true; R.eindTxt = (await state()).txt; break; }
    if (/Stap \d+ voltooid|Helemaal klaar|resultaat/i.test(s.txt)) { R.klaar = true; R.eindTxt = s.txt; break; }
    R.obs.push(`Geen vervolgknop gevonden (iter ${iter}); knoppen: ${s.btns.join(" | ")}; tekst: ${s.txt.slice(0, 150)}`);
    await wait(p, 800);
    if (iter > 6 && !s.hasCheck) break;
  }
  log(`=== ${pad} === stappen=${R.stappen} vragen=${R.vragen.length} klaar=${!!R.klaar}`);
  for (const v of R.vragen) log(` v${v.nr} s${v.stap} tik=${v.tikbaar ? "ja" : "nee"} vert=${v.vertaling ?? (v.altijd ? "altijd" : "-")} rtl=${v.rtl ?? v.altijdRtl ?? "-"} antw=${v.antw} knop=${v.knop} ok=${v.knopOk} goedBij=${v.goedBij} | ${(v.vraag || v.altijdTxt || "").slice(0, 50)} | ar: ${(v.arTxt || v.altijdTxt || "").slice(0, 50)} ${v.opm.length ? "| " + v.opm.join("; ") : ""}`);
  for (const o of R.obs) log("  obs:", o);
  for (const bug of R.bugs) log("  BUG:", bug);
}

// ---------- 5. leesladder + tafels ----------
for (const r of ["leesladder", "tafels"]) {
  await p.goto(`${BASE}/${r}`, { waitUntil: "networkidle" });
  await wait(p, 1500);
  const s = await state();
  rapport.overig[r] = { bodyAr: s.bodyAr, ar: s.ar.length, txt: (await p.evaluate(() => document.body.innerText.replace(/\s+/g, " ").slice(0, 500))), btns: s.btns.slice(0, 12) };
  await p.screenshot({ path: `${OUT}/ar-${r}.png`, fullPage: false });
  log(`=== /${r} ===`, JSON.stringify(rapport.overig[r]));
}

fs.writeFileSync(`${OUT}/ar-rapport.json`, JSON.stringify(rapport, null, 1));
await b.close();

// ---------- EXTRA (EXTRA=1): uitlegscherm, fout-scherm, stepDone, koppel-check NL→AR, tegel 5 ----------
if (process.env.EXTRA) {
  const b2 = await chromium.launch({ headless: true });
  const c2 = await b2.newContext({ viewport: { width: 420, height: 900 }, locale: "nl-NL" });
  const q = await c2.newPage();
  await q.goto(`${BASE}/nieuwkomers`, { waitUntil: "networkidle" });
  await q.evaluate(() => localStorage.setItem("lk_steuntaal", "ar"));
  await q.reload({ waitUntil: "networkidle" }); await q.waitForTimeout(800);
  // tegel 5 Lezen
  await q.evaluate(() => [...document.querySelectorAll("button")].find((x) => /Lezen/.test(x.innerText) && /vijf korte/.test(x.innerText))?.click());
  await q.waitForTimeout(2000);
  log("TEGEL5 url:", q.url(), "| tekst:", (await q.evaluate(() => document.body.innerText.replace(/\s+/g, " ").slice(0, 300))), "| buttons:", (await q.evaluate(() => [...document.querySelectorAll("button")].map((x) => x.innerText.trim().slice(0, 30)).filter(Boolean).slice(0, 15).join(" | "))));
  await q.screenshot({ path: `${OUT}/ar-tegel5-lezen.png` });
  await q.goto(`${BASE}/nieuwkomers`, { waitUntil: "networkidle" }); await q.waitForTimeout(600);
  await q.evaluate(() => [...document.querySelectorAll("button")].find((x) => /Tafels/.test(x.innerText) && /stukje/.test(x.innerText))?.click());
  await q.waitForTimeout(2000);
  log("TEGEL6 url:", q.url());
  for (const pad of ["in-de-klas-nieuwkomers", "woorden-nieuwkomers"]) {
    await q.goto(`${BASE}/leren/pad?id=${pad}`, { waitUntil: "networkidle" }); await q.waitForTimeout(1500);
    await q.evaluate(() => [...document.querySelectorAll("button")].find((x) => /Begin bij deel 1/.test(x.innerText))?.click());
    await q.waitForTimeout(900);
    await q.screenshot({ path: `${OUT}/ar-${pad}-uitleg.png`, fullPage: true });
    log(pad, "UITLEG tekst:", (await q.evaluate(() => document.body.innerText.replace(/\s+/g, " ").slice(0, 700))));
    await q.evaluate(() => [...document.querySelectorAll("button")].find((x) => x.innerText.includes("Naar de vra"))?.click());
    await q.waitForTimeout(1200);
    // koppel-check: per antwoord knopje open → welke AR-regel verschijnt direct eronder?
    const pairs = await q.evaluate(async () => {
      const out = [];
      const knoppen = document.querySelectorAll('button[aria-label="Vertaal dit antwoord"]');
      for (let k = 0; k < knoppen.length; k++) {
        knoppen[k].click();
        await new Promise((r) => setTimeout(r, 150));
        const wrap = knoppen[k].closest("div").parentElement; // SteunOptie-wrapper
        const nl = wrap.querySelector("button.lk-answer-btn")?.innerText.trim();
        const ar = wrap.querySelector('[lang="ar"]')?.innerText.trim();
        out.push({ nl, ar });
        knoppen[k].click();
        await new Promise((r) => setTimeout(r, 100));
      }
      return out;
    });
    log(pad, "KOPPELING NL→AR:", JSON.stringify(pairs));
    // fout antwoord → scherm
    const wrongIdx = await q.evaluate(() => {
      const btns = [...document.querySelectorAll("button.lk-answer-btn")];
      return btns.length;
    });
    for (let a = 0; a < wrongIdx; a++) {
      await q.evaluate((a) => document.querySelectorAll("button.lk-answer-btn")[a].click(), a);
      await q.waitForTimeout(800);
      const t = await q.evaluate(() => document.body.innerText);
      if (/Nog niet helemaal/.test(t)) {
        await q.screenshot({ path: `${OUT}/ar-${pad}-fout.png`, fullPage: true });
        log(pad, "FOUT-scherm knoppen:", (await q.evaluate(() => [...document.querySelectorAll("button")].map((x) => x.innerText.trim().replace(/\s+/g, " ").slice(0, 40)).filter(Boolean).join(" | "))), "| ar-elementen:", (await q.evaluate(() => document.querySelectorAll('[lang="ar"]').length)));
        break;
      }
      if (/Dat is juist/.test(t)) { await q.waitForTimeout(1500); }
    }
  }
  await b2.close();
}
