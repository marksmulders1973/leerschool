// IndexNow-indiener voor Leerkwartier (2026-06-11).
// Meldt alle sitemap-URL's direct aan Bing/Yandex (en alles wat IndexNow deelt)
// → betere Bing-dekking → meer ChatGPT-citaten (ChatGPT-search draait op Bing).
//
// Eénmalig draaien na deploy van het sleutelbestand:
//   node scripts/indexnow-submit.mjs
// De sleutel moet live staan op https://leerkwartier.app/<KEY>.txt
// (anders verifieert IndexNow niet). Daarom: eerst committen+pushen+deploy,
// dan dit draaien.
import { readFileSync } from "node:fs";

const KEY = "04209cbedb9e05bfcaca2e98c2757604";
const HOST = "leerkwartier.app";
const KEY_URL = `https://${HOST}/${KEY}.txt`;

const xml = readFileSync("public/sitemap.xml", "utf8");
const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
console.log(`Sitemap: ${urls.length} URL's gevonden.`);

// IndexNow accepteert tot 10.000 URL's per bulk-POST.
const body = {
  host: HOST,
  key: KEY,
  keyLocation: KEY_URL,
  urlList: urls,
};

const r = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify(body),
});
console.log(`IndexNow-respons: HTTP ${r.status} (200/202 = geaccepteerd)`);
const tekst = await r.text().catch(() => "");
if (tekst) console.log("Body:", tekst.slice(0, 200));
