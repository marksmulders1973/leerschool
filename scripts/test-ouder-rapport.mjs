// Lokale end-to-end-test van het wekelijkse ouder-rapport (A8.1, 8 jul 2026).
// Draait de ÉCHTE stuurOuderRapporten() met een nagemaakte Supabase-laag
// (echte data-vormen uit productie) en een échte Resend-verzending via de
// lokale send-only key (~/.claude/resend-lokaal.env). Onderwerp krijgt
// [TEST]-prefix; ontvanger = Mark zelf.
//
// Gebruik:  node scripts/test-ouder-rapport.mjs [ontvanger@adres]

import { readFileSync, writeFileSync } from "node:fs";
import { homedir } from "node:os";
import { join } from "node:path";

const ONTVANGER = process.argv[2] || "Mark-smulders@hotmail.com";

// Lokale Resend-key + afzender lezen.
const envRaw = readFileSync(join(homedir(), ".claude", "resend-lokaal.env"), "utf8");
const lees = (naam) => (envRaw.match(new RegExp(`^${naam}=(.+)$`, "m")) || [])[1]?.trim();
const RESEND = lees("RESEND_API_KEY");
const FROM = lees("EMAIL_FROM");
if (!RESEND || !FROM) { console.error("resend-lokaal.env mist RESEND_API_KEY/EMAIL_FROM"); process.exit(1); }

// Echte productie-datavormen: Brian's topic_mastery, met last_seen deels naar
// déze week geschoven zodat de score-variant zichtbaar is; 'verhoudingen'
// blijft oud (test dat oude rijen buiten het week-venster vallen).
const d = (dagenTerug) => new Date(Date.now() - dagenTerug * 86400000).toISOString();
const MASTERY = [
  { path_id: "ruimtemeetkunde", attempts: 1, correct: 1, streak: 1, last_seen: d(1) },
  { path_id: "procenten", attempts: 2, correct: 2, streak: 2, last_seen: d(1) },
  { path_id: "procenten", attempts: 1, correct: 0, streak: 0, last_seen: d(2) }, // case-duplicaat → moet samensmelten
  { path_id: "breuken", attempts: 1, correct: 1, streak: 1, last_seen: d(2) },
  { path_id: "negatieve-getallen", attempts: 4, correct: 1, streak: 0, last_seen: d(3) },
  { path_id: "kwadraten-wortels", attempts: 5, correct: 4, streak: 2, last_seen: d(4) },
  { path_id: "verhoudingen", attempts: 5, correct: 0, streak: 0, last_seen: d(70) }, // te oud → niet in rapport
];

const echteFetch = globalThis.fetch;
globalThis.fetch = async (url, opts = {}) => {
  const u = String(url);
  if (u.includes("/rest/v1/")) {
    const antwoord = (data) => new Response(JSON.stringify(data), { status: 200, headers: { "Content-Type": "application/json" } });
    if (u.includes("rpc/ouder_weekrapport_kandidaten")) return antwoord([{ parent_email: ONTVANGER, child_name: "Brian" }]);
    if (u.includes("rpc/niveau_resultaten_voor_email")) return antwoord([]);
    if (u.includes("topic_mastery")) return antwoord(MASTERY);
    if (u.includes("admin_meta")) return antwoord([]);
    return antwoord([]);
  }
  if (u.includes("api.resend.com")) {
    const body = JSON.parse(opts.body);
    body.subject = "[TEST] " + body.subject;
    writeFileSync("scripts/ouder-rapport-preview.html", body.html, "utf8");
    console.log("→ preview opgeslagen: scripts/ouder-rapport-preview.html");
    console.log("→ verzenden naar:", body.to.join(", "), "| onderwerp:", body.subject);
    return echteFetch(url, { ...opts, body: JSON.stringify(body) });
  }
  return echteFetch(url, opts);
};

const { stuurOuderRapporten } = await import("../api/send-ouder-rapport.js");
const uitslag = await stuurOuderRapporten({
  base: "https://nagemaakt.supabase.co",
  key: "test",
  RESEND,
  FROM,
  force: true,
});
console.log("uitslag:", JSON.stringify(uitslag));
