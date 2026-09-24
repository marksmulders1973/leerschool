// Agent-test Nieuwkomer-pakket met steuntaal Oekraïens (uk) — headless, telefoon-viewport.
// Wijzigt geen app-code; schrijft alleen screenshots naar de scratchpad.
import { chromium } from "playwright";
import fs from "node:fs";

const OUT = "C:/Users/mark-/AppData/Local/Temp/claude/C--Users-mark-/e750ede8-6dd1-46d2-bd69-48da94596b10/scratchpad";
fs.mkdirSync(OUT, { recursive: true });
const BASE = "https://leerkwartier.app";
const PADEN = ["in-de-klas-nieuwkomers", "woorden-nieuwkomers", "rekenen-tot-20-nieuwkomers", "rekenen-tot-100-nieuwkomers"];

const b = await chromium.launch({ headless: true });
const c = await b.newContext({ viewport: { width: 420, height: 900 }, locale: "nl-NL" });
const p = await c.newPage();
const log = (...a) => console.log(...a);
const sleep = (ms) => p.waitForTimeout(ms);

const clickBtn = (re) => p.evaluate((src) => {
  const re = new RegExp(src);
  const el = [...document.querySelectorAll("button")].find((x) => re.test(x.innerText));
  if (!el) return null;
  el.click();
  return el.innerText.trim().slice(0, 60);
}, re.source);
const btnTexts = () => p.evaluate(() => [...document.querySelectorAll("button")].map((x) => x.innerText.trim().replace(/\s+/g, " ").slice(0, 40)).filter(Boolean));
const ukCount = () => p.evaluate(() => document.querySelectorAll('[lang="uk"]').length);
const statusCount = () => p.evaluate(() => ({ status: document.querySelectorAll('[role="status"]').length, ok: /Dat is juist!|✅ Goed!/.test(document.body.innerText), fout: /Nog niet helemaal/.test(document.body.innerText) }));
const bodyText = () => p.evaluate(() => document.body.innerText);

// ---------- 1. /nieuwkomers ----------
log("=== 1. /nieuwkomers");
await p.goto(`${BASE}/nieuwkomers`, { waitUntil: "networkidle" });
await sleep(800);
log("versie:", await p.evaluate(() => document.body.innerText.match(/versie \d+/)?.[0]));
const ukBtn = await clickBtn(/Українська/);
log("knop geklikt:", ukBtn);
await sleep(700);
log("localStorage lk_steuntaal =", await p.evaluate(() => localStorage.getItem("lk_steuntaal")));
const nk = await p.evaluate(() => {
  const uk = [...document.querySelectorAll('[lang="uk"]')].map((e) => e.innerText.trim().slice(0, 80));
  const cyr = document.body.innerText.match(/[\u0400-\u04FF][^\n]{0,80}/g) || [];
  return { ukElementen: uk, cyrillischeRegels: cyr.slice(0, 12), tegels: [...document.querySelectorAll("a,button")].map((x) => x.innerText.trim().replace(/\s+/g, " ").slice(0, 50)).filter(Boolean) };
});
log("lang=uk elementen:", JSON.stringify(nk.ukElementen, null, 1));
log("cyrillische regels:", JSON.stringify(nk.cyrillischeRegels, null, 1));
log("links/knoppen:", JSON.stringify(nk.tegels));
await p.screenshot({ path: `${OUT}/uk-01-nieuwkomers.png`, fullPage: true });

// ---------- 2/3. paden ----------
const rapport = {};
for (const pad of PADEN) {
  log(`\n=== PAD ${pad}`);
  const rows = [];
  rapport[pad] = { rows, opmerkingen: [] };
  await p.goto(`${BASE}/leren/pad?id=${pad}`, { waitUntil: "networkidle" });
  await sleep(1500);
  log("steuntaal in deze context:", await p.evaluate(() => localStorage.getItem("lk_steuntaal")));
  log("Begin-knop:", await clickBtn(/Begin bij deel 1/));
  await sleep(900);
  let vraagNr = 0, stap = 1, iter = 0, laatsteVraag = "", stuck = 0, screenshotGemaakt = false;
  const uitlegGezien = [];
  while (iter++ < 120) {
    // Uitleg-scherm van een stap?
    const naar = await p.evaluate(() => {
      const el = [...document.querySelectorAll("button")].find((x) => /Naar de vra(a)?g(en)?|Volgend deel ▶/.test(x.innerText));
      if (!el) return null;
      const tikbaarInUitleg = document.querySelectorAll('[role="button"][title="Tik voor jouw taal"]').length;
      const ukInUitleg = document.querySelectorAll('[lang="uk"]').length;
      const txt = document.body.innerText;
      const t = el.innerText.trim();
      el.click();
      return { t, tikbaarInUitleg, ukInUitleg, kop: (txt.match(/Deel \d+[^\n]*|Stap \d+[^\n]*/) || [""])[0], lengte: txt.length };
    });
    if (naar) {
      log(`[uitleg stap ${stap}] knop "${naar.t}" · tikbare zinnen in uitleg: ${naar.tikbaarInUitleg} · lang=uk: ${naar.ukInUitleg}`);
      uitlegGezien.push({ stap, ...naar });
      await sleep(900);
      continue;
    }
    // Stap klaar?
    const done = await p.evaluate(() => {
      const bs = [...document.querySelectorAll("button")].filter((x) => !x.disabled);
      const el = bs.find((x) => /Klaar — bekijk je resultaat/.test(x.innerText)) || bs.find((x) => /Volgend deel/.test(x.innerText));
      if (!el) return null;
      const t = el.innerText.trim().replace(/\s+/g, " ");
      el.click();
      return t;
    });
    if (done) {
      log(`[stap ${stap} klaar] knop "${done}"`);
      stap++;
      if (stap > 12) { log("VAST in stap-klaar-lus; knoppen:", JSON.stringify(await btnTexts())); rapport[pad].opmerkingen.push(`vast in stap-klaar-lus, knoppen ${JSON.stringify(await btnTexts())}`); break; }
      await sleep(1000);
      if (/resultaat/.test(done)) { await sleep(800); log("→ afrond-scherm bereikt"); await p.screenshot({ path: `${OUT}/uk-${pad}-einde.png`, fullPage: false }); break; }
      continue;
    }
    // Vraag?
    const nAns = await p.locator("button.lk-answer-btn").count();
    if (nAns === 0) {
      const bt = await btnTexts();
      const txt = (await bodyText()).slice(0, 300).replace(/\n/g, " | ");
      if (/Je resultaat|Klaar!|score/i.test(txt) && iter > 3) { log("→ eind-scherm:", txt.slice(0, 120)); break; }
      stuck++;
      if (stuck > 6) { log("VAST — geen vraag/knop gevonden. Knoppen:", JSON.stringify(bt), "tekst:", txt); rapport[pad].opmerkingen.push(`VAST na vraag ${vraagNr}: knoppen ${JSON.stringify(bt)}`); break; }
      await sleep(700);
      continue;
    }
    stuck = 0;
    const vraagInfo = await p.evaluate(() => {
      const txt = document.body.innerText;
      const m = txt.match(/(?:Vraag|Check) (\d+) van (\d+)/);
      const q = document.querySelector('[role="button"][title="Tik voor jouw taal"]');
      // vraagtekst: eerste element met veel tekst vóór de antwoordknoppen
      const ans = document.querySelector("button.lk-answer-btn");
      let node = ans; let kaart = null;
      while (node && node !== document.body) { if (node.innerText && node.innerText.length > 30 && node.querySelector("button.lk-answer-btn")) { kaart = node; break; } node = node.parentElement; }
      const kaartTxt = kaart ? kaart.innerText.replace(/\s+/g, " ").slice(0, 160) : "";
      return { teller: m ? `${m[1]}/${m[2]}` : "?", tikbaar: !!q, qTekst: (q ? q.innerText : kaartTxt).replace(/\s+/g, " ").replace(/^Check \d+ van \d+( · poging \d+)? /, "").replace(/📖 Terug naar de tekst /, "").slice(0, 100), ukVooraf: document.querySelectorAll('[lang="uk"]').length, ukVoorafTekst: [...document.querySelectorAll('[lang="uk"]')].map((e) => e.innerText).join(" | ").slice(0, 100) };
    });
    if (rows.length && vraagInfo.teller === rows.at(-1).teller && stap === rows.at(-1).stap && vraagInfo.qTekst.slice(0, 40) === laatsteVraag.slice(0, 40)) {
      // zelfde vraag nog een keer (na fout antwoord) — niet opnieuw meten
    } else {
      vraagNr++;
      laatsteVraag = vraagInfo.qTekst;
      const row = { nr: vraagNr, stap, teller: vraagInfo.teller, vraag: vraagInfo.qTekst, tikbaar: vraagInfo.tikbaar, ukVooraf: vraagInfo.ukVooraf, ukVoorafTekst: vraagInfo.ukVoorafTekst, vertaalNaTik: null, wegNa2eTik: null, antwoorden: nAns, knopjes: 0, knopjesOk: 0, gekozenBijKnopje: false, opm: [] };
      // (a) vraagzin tikken
      if (vraagInfo.tikbaar) {
        const voor = await ukCount();
        await p.evaluate(() => document.querySelector('[role="button"][title="Tik voor jouw taal"]').click());
        await sleep(250);
        const na = await ukCount();
        row.vertaalNaTik = na > voor;
        row.ukTekst = await p.evaluate(() => [...document.querySelectorAll('[lang="uk"]')].map((e) => e.innerText).join(" | ").slice(0, 120));
        const st1 = await statusCount();
        if (st1.status || st1.ok || st1.fout) row.opm.push("tik op vraag koos een antwoord?!");
        await p.evaluate(() => document.querySelector('[role="button"][title="Tik voor jouw taal"]').click());
        await sleep(250);
        row.wegNa2eTik = (await ukCount()) === voor;
      }
      // (c) antwoord-knopjes
      const knopjes = await p.locator('button[aria-label="Vertaal dit antwoord"]').count();
      row.knopjes = knopjes;
      for (let k = 0; k < knopjes; k++) {
        const voor = await ukCount();
        await p.evaluate((k) => document.querySelectorAll('button[aria-label="Vertaal dit antwoord"]')[k].click(), k);
        await sleep(200);
        const na = await ukCount();
        const st = await statusCount();
        if (na > voor) row.knopjesOk++;
        if (st.status || st.ok || st.fout) row.gekozenBijKnopje = true;
        if (k === 0) row.antwoordUk = await p.evaluate(() => [...document.querySelectorAll('[lang="uk"]')].at(-1)?.innerText);
        // laat het eerste knopje open voor de screenshot, sluit de rest
        if (k > 0) { await p.evaluate((k) => document.querySelectorAll('button[aria-label="Vertaal dit antwoord"]')[k].click(), k); await sleep(120); }
      }
      // (4) screenshot met vraag + 1 antwoord open (eerste vraag van elk pad; woorden: eerste met knopje)
      if (!screenshotGemaakt && (vraagInfo.tikbaar || knopjes > 0 || row.ukVooraf > 0)) {
        if (vraagInfo.tikbaar) { await p.evaluate(() => document.querySelector('[role="button"][title="Tik voor jouw taal"]').click()); await sleep(250); }
        await p.screenshot({ path: `${OUT}/uk-${pad}-vraag${vraagNr}.png`, fullPage: false });
        screenshotGemaakt = true;
        if (vraagInfo.tikbaar) { await p.evaluate(() => document.querySelector('[role="button"][title="Tik voor jouw taal"]').click()); await sleep(150); }
      }
      if (knopjes > 0) { await p.evaluate(() => document.querySelectorAll('button[aria-label="Vertaal dit antwoord"]')[0].click()); await sleep(120); }
      if (knopjes !== nAns) row.opm.push(knopjes === 0 ? "geen vertaalknopjes bij antwoorden" : `knopjes ${knopjes} ≠ antwoorden ${nAns}`);
      // tekst van de antwoorden (voor de observatie 'alleen getallen')
      row.antwoordTeksten = await p.evaluate(() => [...document.querySelectorAll("button.lk-answer-btn")].map((x) => x.innerText.trim().replace(/\s+/g, " ").slice(0, 30)));
      rows.push(row);
      log(`V${vraagNr} (${row.teller}, stap ${stap}) "${row.vraag.slice(0, 60)}" · tikbaar ${row.tikbaar} · vertaling ${row.vertaalNaTik} · weg ${row.wegNa2eTik} · ukVooraf ${row.ukVooraf} · antw ${nAns} · knopjes ${knopjes}/${row.knopjesOk} · gekozen? ${row.gekozenBijKnopje} ${row.opm.join("; ")}`);
    }
    // (d) antwoord kiezen: eerste nog niet geprobeerde knop
    const geprobeerd = rows.at(-1).geprobeerd || (rows.at(-1).geprobeerd = []);
    const gekozen = await p.evaluate((skip) => {
      const bs = [...document.querySelectorAll("button.lk-answer-btn")];
      const el = bs.find((x) => !skip.includes(x.innerText.trim())) || bs[0];
      const t = el.innerText.trim();
      el.click();
      return t;
    }, geprobeerd);
    geprobeerd.push(gekozen);
    await sleep(900);
    const st = await statusCount();
    if (st.fout) {
      const t = await clickBtn(/Probeer opnieuw|Verder|Volgende/);
      rows.at(-1).verderKnopNaFout = t;
      await sleep(500);
      continue;
    }
    if (st.ok) {
      // na goed: auto-door of knop?
      const t = await clickBtn(/^Verder ▶|Klaar met deze stap|Volgende/);
      rows.at(-1).verderKnopNaGoed = t || "(auto-door, geen knop)";
      await sleep(1600);
      continue;
    }
    rows.at(-1).opm.push(`na klik op "${gekozen}" geen ✅/❌ gezien; knoppen: ${JSON.stringify(await btnTexts())}`);
    await sleep(800);
  }
  rapport[pad].uitleg = uitlegGezien;
  log(`Pad ${pad}: ${rows.length} vragen gedaan, ${uitlegGezien.length} uitlegschermen`);
}

// ---------- 5. leesladder + tafels ----------
for (const r of ["/leesladder", "/tafels"]) {
  log(`\n=== ${r}`);
  await p.goto(`${BASE}${r}`, { waitUntil: "networkidle" });
  await sleep(1500);
  const info = await p.evaluate(() => ({
    uk: document.querySelectorAll('[lang="uk"]').length,
    tikbaar: document.querySelectorAll('[title="Tik voor jouw taal"]').length,
    cyr: (document.body.innerText.match(/[\u0400-\u04FF]/g) || []).length,
    tekst: document.body.innerText.replace(/\s+/g, " ").slice(0, 700),
    knoppen: [...document.querySelectorAll("button")].map((x) => x.innerText.trim().replace(/\s+/g, " ").slice(0, 40)).filter(Boolean).slice(0, 25),
  }));
  log(JSON.stringify(info, null, 1));
  await p.screenshot({ path: `${OUT}/uk-${r.slice(1)}.png`, fullPage: false });
}

fs.writeFileSync(`${OUT}/uk-rapport.json`, JSON.stringify(rapport, null, 1));
log("\nklaar; rapport in", `${OUT}/uk-rapport.json`);
await b.close();
