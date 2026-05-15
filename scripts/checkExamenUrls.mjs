#!/usr/bin/env node
// checkExamenUrls.mjs — controleert HTTP-status van alle examenblad.nl-URLs
// die in EXAMENS-config staan (opgaven + correctie + bijlage + uitwerkbijlage).
//
// Output: tabel met OK/MISSING per examen, samenvatting onderaan.
// Geeft exit-code 1 als er broken URLs zijn (handig voor CI later).

import { EXAMENS, getExamenUrl, getCorrectieUrl, getBijlageUrl, getUitwerkbijlageUrl } from "../src/data/examens.js";

async function checkUrl(url) {
  if (!url) return "—";
  try {
    const res = await fetch(url, { method: "HEAD", redirect: "manual" });
    // 200, 301, 302, 303, 307, 308 = aanwezig (redirect naar PDF)
    if (res.status >= 200 && res.status < 400) return "OK";
    return `${res.status}`;
  } catch (e) {
    return "ERR";
  }
}

async function main() {
  const externs = EXAMENS.filter((e) => e.externalUrl);
  console.log(`Checking ${externs.length} examens × 4 URL-typen = max ${externs.length * 4} requests`);
  console.log("(via examenblad.nl — HEAD-requests met redirect:manual)\n");

  const rows = [];
  for (const e of externs) {
    const o = await checkUrl(getExamenUrl(e));
    const c = await checkUrl(getCorrectieUrl(e));
    const b = await checkUrl(getBijlageUrl(e));
    const u = await checkUrl(getUitwerkbijlageUrl(e));
    rows.push({ id: e.id, o, c, b, u });
  }

  // Print tabel
  console.log("id".padEnd(45) + "opg  cor  bij  uit");
  console.log("─".repeat(60));
  let allOk = true;
  let brokenList = [];
  for (const r of rows) {
    const cells = [r.o, r.c, r.b, r.u].map((s) => s.padEnd(4)).join(" ");
    const hasBroken = [r.o, r.c, r.b, r.u].some((s) => s !== "OK" && s !== "—");
    const mark = hasBroken ? "⚠" : "✓";
    if (hasBroken) {
      allOk = false;
      brokenList.push({ id: r.id, o: r.o, c: r.c, b: r.b, u: r.u });
    }
    console.log(`${mark} ${r.id.padEnd(43)} ${cells}`);
  }

  console.log("─".repeat(60));
  console.log(`Totaal: ${externs.length} examens`);
  console.log(`OK:     ${externs.length - brokenList.length}`);
  console.log(`Broken: ${brokenList.length}`);

  if (brokenList.length > 0) {
    console.log("\n⚠ Examens met broken URLs:");
    for (const b of brokenList) {
      const issues = [];
      if (b.o !== "OK") issues.push(`opg=${b.o}`);
      if (b.c !== "OK") issues.push(`cor=${b.c}`);
      if (b.b !== "OK" && b.b !== "—") issues.push(`bij=${b.b}`);
      if (b.u !== "OK" && b.u !== "—") issues.push(`uit=${b.u}`);
      console.log(`  ${b.id}: ${issues.join(", ")}`);
    }
    process.exit(1);
  }
  console.log("\n✓ Alle URLs OK");
}

main().catch((e) => {
  console.error("FATAL:", e);
  process.exit(2);
});
