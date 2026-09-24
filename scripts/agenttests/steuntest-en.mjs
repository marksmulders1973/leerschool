// Steuntaal-test "nieuwkomer met thuistaal Engels" — Nieuwkomer-pakket live (v703).
// Draai: node scripts/agenttests/steuntest-en.mjs   (vanuit projectmap)
import { chromium } from "playwright";
import fs from "node:fs";

const SHOT = "C:/Users/mark-/AppData/Local/Temp/claude/C--Users-mark-/e750ede8-6dd1-46d2-bd69-48da94596b10/scratchpad";
const BASE = "https://leerkwartier.app";
const PADEN = ["in-de-klas-nieuwkomers", "woorden-nieuwkomers", "rekenen-tot-20-nieuwkomers", "rekenen-tot-100-nieuwkomers"];
const MAX_VRAGEN = 40;
const ALLEEN = process.argv[2] || null; // optioneel: één pad-id of "overig"
process.on("unhandledRejection", (e) => { console.log("UNHANDLED", String(e && e.stack || e).slice(0, 600)); process.exit(2); });
process.on("uncaughtException", (e) => { console.log("UNCAUGHT", String(e && e.stack || e).slice(0, 600)); process.exit(3); });

const b = await chromium.launch({ headless: true });
const c = await b.newContext({ viewport: { width: 420, height: 900 }, locale: "nl-NL" });
const p = await c.newPage();
p.on("pageerror", (e) => console.log("PAGEERROR", String(e).slice(0, 200)));

const clickBtn = (re) => p.evaluate((src) => {
  const re = new RegExp(src);
  const el = [...document.querySelectorAll("button")].find((x) => re.test(x.innerText));
  if (!el) return null;
  el.click();
  return el.innerText.trim();
}, re.source);
const buttonTexts = () => p.evaluate(() => [...document.querySelectorAll("button")].map((x) => x.innerText.trim().replace(/\s+/g, " ")).filter(Boolean));
const state = () => p.evaluate(() => {
  const ans = [...document.querySelectorAll("button.lk-answer-btn")];
  const q = document.querySelector('[role="button"][title="Tik voor jouw taal"]');
  return {
    answers: ans.length,
    answersDisabled: ans.filter((x) => x.disabled).length,
    knopjes: document.querySelectorAll('button[aria-label="Vertaal dit antwoord"]').length,
    vraagTikbaar: !!q,
    vraagTekst: (q ? q.querySelector("div div") : null)?.innerText?.trim().slice(0, 90) || null,
    langEn: [...document.querySelectorAll('[lang="en"]')].filter((e) => e.offsetParent !== null).map((e) => e.innerText.trim().slice(0, 80)),
    status: document.querySelectorAll('[role="status"]').length,
    body: document.body.innerText,
    versie: document.body.innerText.match(/versie \d+/)?.[0] || null,
  };
});

// ---------- 1. /nieuwkomers ----------
const rapport = { nieuwkomers: {}, paden: {}, bugs: [], overig: {} };
await p.goto(`${BASE}/nieuwkomers`, { waitUntil: "networkidle" });
await p.waitForTimeout(1000);
const voorTaal = await p.evaluate(() => document.body.innerText);
const geklikt = await clickBtn(/^English$/);
await p.waitForTimeout(600);
const naTaal = await p.evaluate(() => ({ ls: localStorage.getItem("lk_steuntaal"), tekst: document.body.innerText, pressed: [...document.querySelectorAll("button[aria-pressed]")].filter((x) => x.getAttribute("aria-pressed") === "true").map((x) => x.innerText.trim()) }));
rapport.nieuwkomers = {
  knopGeklikt: geklikt, localStorage: naTaal.ls, pressed: naTaal.pressed,
  taalvraagEN: naTaal.tekst.includes("Which language do you speak at home?"),
  uitlegEN: naTaal.tekst.includes("Tap a sentence, or the small button next to an answer"),
  introEN: naTaal.tekst.includes("Start at 1. Do a little every day."),
  voorleesEN: naTaal.tekst.includes("Press it to hear the text."),
  nlBlijft: naTaal.tekst.includes("Welke taal spreek je thuis?") && naTaal.tekst.includes("Begin bij 1."),
  tegelsNLalleen: !/In the class|Words|Reading/.test(naTaal.tekst),
  wasAlEN: voorTaal.includes("Which language"),
  scrollBreedte: await p.evaluate(() => ({ sw: document.documentElement.scrollWidth, cw: document.documentElement.clientWidth })),
};
await p.screenshot({ path: `${SHOT}/en-01-nieuwkomers.png`, fullPage: true });

// ---------- 2. paden ----------
for (const id of PADEN.filter((x) => !ALLEEN || x === ALLEEN)) {
  const R = { vragen: [], stappen: [], knopteksten: new Set(), problemen: [], screenshot: null };
  rapport.paden[id] = R;
  await p.goto(`${BASE}/leren/pad?id=${id}`, { waitUntil: "networkidle" });
  await p.waitForTimeout(1500);
  R.versie = (await state()).versie;
  R.begin = await clickBtn(/Begin bij deel 1/);
  await p.waitForTimeout(900);
  if (!R.begin) { R.problemen.push("Knop 'Begin bij deel 1' niet gevonden; knoppen: " + (await buttonTexts()).join(" | ")); continue; }
  const uitleg1 = await p.evaluate(() => ({ tikbaar: !!document.querySelector('[role="button"][title="Tik voor jouw taal"]'), en: document.querySelectorAll('[lang="en"]').length, tekst: document.body.innerText.slice(0, 400) }));
  R.stappen.push({ stap: 1, uitlegTikbaar: uitleg1.tikbaar, uitlegLangEn: uitleg1.en });
  R.naarVragen = await clickBtn(/Naar de vra(ag|gen)/);
  await p.waitForTimeout(1200);
  if (!R.naarVragen) { R.problemen.push("Knop 'Naar de vragen' niet gevonden; knoppen: " + (await buttonTexts()).join(" | ")); continue; }

  let stap = 1, nr = 0, klaar = false, guard = 0, shotGemaakt = false;
  while (!klaar && guard++ < 120) {
    let s = await state();
    if (s.answers > 0 && s.answersDisabled === 0) {
      nr++;
      const v = { nr, stap, vraag: s.vraagTekst, tikbaar: s.vraagTikbaar, altijdZichtbaar: s.langEn.length > 0 && !s.vraagTikbaar, langEnVoorTik: s.langEn.length, answers: s.answers, knopjes: s.knopjes, opm: [] };
      if (!s.vraagTikbaar) {
        v.vraag = await p.evaluate(() => {
          const btn = document.querySelector("button.lk-answer-btn");
          let el = btn; for (let i = 0; i < 6 && el; i++) el = el.parentElement;
          return el?.innerText?.split("\n").find((l) => l.trim().length > 3)?.slice(0, 90) || null;
        });
      }
      // (a) vraag tikken
      if (s.vraagTikbaar) {
        const voor = s.langEn.length;
        await p.evaluate(() => document.querySelector('[role="button"][title="Tik voor jouw taal"]').click());
        await p.waitForTimeout(250);
        let s2 = await state();
        v.vertalingVerschijnt = s2.langEn.length > voor;
        v.vertaling = s2.langEn.find((t) => !s.langEn.includes(t)) || null;
        v.pressed = await p.evaluate(() => document.querySelector('[role="button"][title="Tik voor jouw taal"]').getAttribute("aria-pressed"));
        await p.evaluate(() => document.querySelector('[role="button"][title="Tik voor jouw taal"]').click());
        await p.waitForTimeout(250);
        s2 = await state();
        v.vertalingVerdwijnt = s2.langEn.length === voor;
        if (!v.vertalingVerschijnt) rapport.bugs.push(`${id} vraag ${nr}: tik op vraag toont GEEN [lang=en]-regel`);
        if (!v.vertalingVerdwijnt) rapport.bugs.push(`${id} vraag ${nr}: tweede tik verbergt vertaling niet`);
        // weer openen voor screenshot
        await p.evaluate(() => document.querySelector('[role="button"][title="Tik voor jouw taal"]').click());
        await p.waitForTimeout(200);
      } else {
        v.vertalingVerschijnt = null;
        if (s.langEn.length > 0) v.vertaling = s.langEn[0];
      }
      // (c) antwoord-knopjes
      v.knopjesOk = 0; v.knopjesFout = [];
      for (let k = 0; k < s.knopjes; k++) {
        const voorK = (await state()).langEn.length;
        await p.evaluate((k) => document.querySelectorAll('button[aria-label="Vertaal dit antwoord"]')[k].click(), k);
        await p.waitForTimeout(220);
        const sk = await state();
        const nieuw = sk.langEn.length > voorK;
        const geenKeuze = sk.answersDisabled === 0 && sk.status === 0 && sk.answers === s.answers;
        const ansTekst = await p.evaluate((k) => document.querySelectorAll("button.lk-answer-btn")[k]?.innerText.trim(), k);
        if (nieuw && geenKeuze) v.knopjesOk++;
        else { v.knopjesFout.push({ k, nieuw, geenKeuze, disabled: sk.answersDisabled, status: sk.status }); rapport.bugs.push(`${id} vraag ${nr} knopje ${k + 1} ('${ansTekst}'): vertaling=${nieuw} geenAntwoordGekozen=${geenKeuze}`); }
      }
      if (s.knopjes !== s.answers) v.opm.push(`knopjes ${s.knopjes} ≠ antwoorden ${s.answers}`);
      const opties = await p.evaluate(() => [...document.querySelectorAll("button.lk-answer-btn")].map((x) => x.innerText.trim()));
      v.opties = opties;
      if (s.knopjes === 0 && opties.every((o) => /^[\d\s+\-=€,.]+$/.test(o))) v.opm.push("alleen getallen → geen knopje = bedoeld");
      else if (s.knopjes === 0 && s.answers > 0) v.opm.push("tekst-antwoorden ZONDER knopje");
      const sAll = await state();
      v.langEnOpen = sAll.langEn.length;
      v.checkGeenKeuze = sAll.answersDisabled === 0 && sAll.status === 0;
      v.overflow = await p.evaluate(() => ({ sw: document.documentElement.scrollWidth, cw: document.documentElement.clientWidth, buiten: [...document.querySelectorAll('[lang="en"], button[aria-label="Vertaal dit antwoord"], button.lk-answer-btn')].filter((e) => { const r = e.getBoundingClientRect(); return r.right > window.innerWidth + 1 || r.left < -1; }).length }));
      if (v.overflow.sw > v.overflow.cw || v.overflow.buiten > 0) v.opm.push(`overflow sw=${v.overflow.sw} buiten=${v.overflow.buiten}`);
      if (!shotGemaakt && (s.vraagTikbaar || s.langEn.length > 0)) {
        R.screenshot = `${SHOT}/en-${id}-v${nr}.png`;
        await p.screenshot({ path: R.screenshot, fullPage: false });
        await p.screenshot({ path: `${SHOT}/en-${id}-v${nr}-full.png`, fullPage: true });
        shotGemaakt = true;
      }
      // (d) antwoord kiezen: eerste knop; bij fout → Probeer opnieuw → volgende knop
      v.pogingen = [];
      let gelukt = false;
      for (let k = 0; k < s.answers && !gelukt; k++) {
        await p.evaluate((k) => document.querySelectorAll("button.lk-answer-btn")[k]?.click(), k);
        await p.waitForTimeout(1600);
        const btns = await buttonTexts();
        btns.forEach((t) => R.knopteksten.add(t.slice(0, 40)));
        const opnieuw = btns.find((t) => /Probeer opnieuw/.test(t));
        if (opnieuw) {
          v.pogingen.push(`${k + 1}:fout`);
          await clickBtn(/Probeer opnieuw/);
          await p.waitForTimeout(400);
        } else {
          v.pogingen.push(`${k + 1}:goed`);
          gelukt = true;
        }
      }
      if (!gelukt) { v.opm.push("geen enkele optie goed?!"); R.problemen.push(`vraag ${nr}: geen optie werd als goed geaccepteerd`); klaar = true; }
      R.vragen.push(v);
      console.log(`[${id}] stap ${stap} vraag ${nr}: tikbaar=${v.tikbaar} vert=${v.vertalingVerschijnt} ans=${v.answers} knopjes=${v.knopjes} ok=${v.knopjesOk} pog=${v.pogingen.join(",")} ${v.opm.join("; ")}`);
      if (nr >= MAX_VRAGEN) { R.problemen.push("MAX_VRAGEN bereikt"); klaar = true; }
      continue;
    }
    // tussen-schermen
    const btns = await buttonTexts();
    btns.forEach((t) => R.knopteksten.add(t.slice(0, 40)));
    if (btns.some((t) => /Verder ▶|Klaar met deze stap/.test(t))) { await clickBtn(/Verder ▶|Klaar met deze stap/); await p.waitForTimeout(800); continue; }
    if (btns.some((t) => /Naar de vra(ag|gen)/.test(t))) {
      const u = await p.evaluate(() => ({ tikbaar: !!document.querySelector('[role="button"][title="Tik voor jouw taal"]'), en: document.querySelectorAll('[lang="en"]').length }));
      if (!R.stappen.find((x) => x.stap === stap)) R.stappen.push({ stap, uitlegTikbaar: u.tikbaar, uitlegLangEn: u.en });
      await clickBtn(/Naar de vra(ag|gen)/); await p.waitForTimeout(1000); continue;
    }
    if (btns.some((t) => /Volgend deel/.test(t))) { stap++; await clickBtn(/Volgend deel/); await p.waitForTimeout(1000); continue; }
    if (btns.some((t) => /Klaar — bekijk je resultaat/.test(t))) { await clickBtn(/Klaar — bekijk je resultaat/); await p.waitForTimeout(1200); R.eind = (await state()).body.slice(0, 300).replace(/\n+/g, " / "); klaar = true; continue; }
    if (btns.some((t) => /Goed onthouden|Verder met deel/.test(t))) { await clickBtn(/Goed onthouden|Verder met deel/); await p.waitForTimeout(800); continue; }
    if (/Klaar|Gefeliciteerd|score|Je hebt/i.test((await state()).body) && !btns.some((t) => /lk-answer/.test(t))) {
      // mogelijk al op AllDone
      const s3 = await state();
      if (s3.answers === 0 && /van de \d+|resultaat|Terug naar paden/i.test(s3.body)) { R.eind = s3.body.slice(0, 300).replace(/\n+/g, " / "); klaar = true; continue; }
    }
    await p.waitForTimeout(700);
    if (guard % 8 === 0) { R.problemen.push(`vast na vraag ${nr} (stap ${stap}); knoppen: ${btns.join(" | ")}`); }
    if (guard > 30 && (await state()).answers === 0) { R.problemen.push(`gestopt: geen verder-knop gevonden na vraag ${nr}; knoppen: ${btns.join(" | ")}`); klaar = true; }
  }
  R.knopteksten = [...R.knopteksten];
  R.totaalVragen = nr;
  console.log(`[${id}] KLAAR ${nr} vragen; problemen: ${R.problemen.join(" || ")}`);
  fs.writeFileSync(`${SHOT}/steuntest-en-rapport${ALLEEN ? "-" + ALLEEN : ""}.json`, JSON.stringify(rapport, (k, val) => val instanceof Set ? [...val] : val, 2));
}

// ---------- 5. leesladder + tafels ----------
for (const pg of (ALLEEN && ALLEEN !== "overig" ? [] : ["leesladder", "tafels"])) {
  await p.goto(`${BASE}/${pg}`, { waitUntil: "networkidle" });
  await p.waitForTimeout(1500);
  const o = await p.evaluate(() => ({
    tikbaar: document.querySelectorAll('[role="button"][title="Tik voor jouw taal"]').length,
    knopjes: document.querySelectorAll('button[aria-label="Vertaal dit antwoord"]').length,
    langEn: document.querySelectorAll('[lang="en"]').length,
    voorlees: [...document.querySelectorAll("button")].filter((x) => /Lees voor|🔊/.test(x.innerText)).length,
    tekst: document.body.innerText.replace(/\n+/g, " / ").slice(0, 700),
    knoppen: [...document.querySelectorAll("button")].map((x) => x.innerText.trim().replace(/\s+/g, " ")).filter(Boolean).slice(0, 25),
  }));
  rapport.overig[pg] = o;
  await p.screenshot({ path: `${SHOT}/en-${pg}.png`, fullPage: true });
}

fs.writeFileSync(`${SHOT}/steuntest-en-rapport${ALLEEN ? "-" + ALLEEN : ""}.json`, JSON.stringify(rapport, null, 2));
console.log("RAPPORT geschreven");
await b.close();
