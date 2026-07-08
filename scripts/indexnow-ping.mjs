// IndexNow-ping (AI-vindbaarheid, 8 jul 2026): meldt nieuwe/gewijzigde
// pagina's direct bij Bing (en andere IndexNow-zoekmachines). Relevant omdat
// ChatGPT-search op de Bing-index draait — sneller geïndexeerd = eerder
// citeerbaar door chatbots.
//
// Gebruik:  node scripts/indexnow-ping.mjs [url1 url2 ...]
// Zonder argumenten pingt hij de vaste kernpagina's hieronder.
// De sleutel staat als bestand in public/ (vereist door het protocol) en is
// geen geheim — hij bewijst alleen domein-eigendom.

const HOST = "leerkwartier.app";
const KEY = "4cd0959ec0340a198d2b765c8da2c3bb";

const KERNPAGINAS = [
  "https://leerkwartier.app/",
  "https://leerkwartier.app/llms.txt",
  "https://leerkwartier.app/llms-full.txt",
  "https://leerkwartier.app/vandaag",
  "https://leerkwartier.app/doorstroomtoets-oefentoets",
  "https://leerkwartier.app/doorstroomtoets-oefenen.html",
  "https://leerkwartier.app/doorstroomtoets-2027-gids.html",
  "https://leerkwartier.app/begrijpend-lezen-oefenen.html",
  "https://leerkwartier.app/rekenen-doorstroomtoets.html",
  "https://leerkwartier.app/gratis-bijles.html",
  "https://leerkwartier.app/gratis-alternatief-squla.html",
  "https://leerkwartier.app/vmbo-examens-oefenen.html",
  "https://leerkwartier.app/klaar-voor-de-brugklas.html",
  "https://leerkwartier.app/zomerdip-voorkomen.html",
  "https://leerkwartier.app/oefenpakket",
  "https://leerkwartier.app/leesladder",
];

const urls = process.argv.slice(2).length ? process.argv.slice(2) : KERNPAGINAS;

const resp = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host: HOST,
    key: KEY,
    keyLocation: `https://${HOST}/${KEY}.txt`,
    urlList: urls,
  }),
});

console.log(`IndexNow: ${resp.status} ${resp.statusText} — ${urls.length} URL's gemeld`);
if (!resp.ok) console.log(await resp.text());
