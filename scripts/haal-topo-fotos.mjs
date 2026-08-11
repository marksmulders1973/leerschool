// 📷 Foto-ophaler voor topografie (hoofdsteden) + historische figuren.
// Mark 11 aug 2026: "foto's die passend, leerzaam en vrij te gebruiken zijn"
// (WhatsApp-feedback 10 aug: "liefst met bv foto van Arnhem" + "echte
// portretten bij historische figuren"). Regel 9 aug: rechtenvrij (Wikimedia)
// óf niet doen — daarom halen we per foto ook LICENTIE + MAKER op en slaan
// die als credit op, zodat de app een eerlijke bronvermelding kan tonen.
//
// Bron: nl.wikipedia page-summary (infobox-beeld, altijd Commons/vrij) +
// Commons extmetadata voor licentie en maker.
// Gebruik: node scripts/haal-topo-fotos.mjs
// Output: public/fotos/*.jpg + src/data/fotoData.js

import { writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const fotoDir = join(root, "public", "fotos");
mkdirSync(fotoDir, { recursive: true });

const STEDEN = [
  { key: "groningen", titel: "Groningen (stad)", label: "Groningen" },
  { key: "leeuwarden", titel: "Leeuwarden (stad)", label: "Leeuwarden" },
  { key: "assen", titel: "Assen", label: "Assen" },
  { key: "zwolle", titel: "Zwolle", label: "Zwolle" },
  { key: "lelystad", titel: "Lelystad", label: "Lelystad" },
  { key: "arnhem", titel: "Arnhem", label: "Arnhem" },
  { key: "utrecht", titel: "Utrecht (stad)", label: "Utrecht" },
  { key: "haarlem", titel: "Haarlem", label: "Haarlem" },
  { key: "den-haag", titel: "Den Haag", label: "Den Haag" },
  { key: "middelburg", titel: "Middelburg (Zeeland)", label: "Middelburg" },
  { key: "s-hertogenbosch", titel: "'s-Hertogenbosch (stad)", label: "'s-Hertogenbosch" },
  { key: "maastricht", titel: "Maastricht", label: "Maastricht" },
];

const FIGUREN = [
  { key: "erasmus", titel: "Desiderius Erasmus", label: "Erasmus" },
  { key: "willem-van-oranje", titel: "Willem van Oranje", label: "Willem van Oranje" },
  { key: "hugo-de-groot", titel: "Hugo de Groot", label: "Hugo de Groot" },
  { key: "rembrandt", titel: "Rembrandt van Rijn", label: "Rembrandt" },
  { key: "michiel-de-ruyter", titel: "Michiel de Ruyter", label: "Michiel de Ruyter" },
  { key: "vincent-van-gogh", titel: "Vincent van Gogh", label: "Vincent van Gogh" },
];

const UA = { headers: { "User-Agent": "Leerkwartier-app/1.0 (leerkwartier.app; educatief, non-profit)" } };

async function summary(titel) {
  const r = await fetch(`https://nl.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(titel)}`, UA);
  if (!r.ok) return null;
  return r.json();
}

function bestandsnaamUitThumb(url) {
  // .../commons/thumb/4/4d/FILE.jpg/330px-FILE.jpg → FILE.jpg
  const m = url.match(/\/thumb\/[0-9a-f]\/[0-9a-f]{2}\/([^/]+)\//);
  return m ? decodeURIComponent(m[1]) : null;
}

async function licentie(bestand) {
  const api = `https://commons.wikimedia.org/w/api.php?action=query&titles=${encodeURIComponent("File:" + bestand)}&prop=imageinfo&iiprop=extmetadata&format=json&origin=*`;
  try {
    const r = await fetch(api, UA);
    const j = await r.json();
    const pages = j?.query?.pages || {};
    const info = Object.values(pages)[0]?.imageinfo?.[0]?.extmetadata || {};
    const lic = info.LicenseShortName?.value || "";
    const artiest = (info.Artist?.value || "").replace(/<[^>]+>/g, "").trim();
    return { lic, artiest };
  } catch { return { lic: "", artiest: "" }; }
}

const slaap = (ms) => new Promise((r) => setTimeout(r, ms));

async function haal(items, soort) {
  const uit = [];
  for (const it of items) {
    await slaap(4500); // rate-limit-vriendelijk (Wikimedia best practices)
    const s = (await summary(it.titel)) || (await slaap(4500), await summary(it.label));
    const thumb = s?.thumbnail?.source;
    if (!thumb) { console.log(`⏭️  ${it.label}: geen beeld`); continue; }
    const bestand = bestandsnaamUitThumb(thumb);
    if (!bestand) { console.log(`⏭️  ${it.label}: bestandsnaam onleesbaar`); continue; }
    // Special:FilePath schaalt betrouwbaar naar 640px (redirect naar thumb)
    const url640 = `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(bestand)}?width=640`;
    const res = await fetch(url640, UA);
    if (!res.ok) { console.log(`⏭️  ${it.label}: download mislukt (${res.status})`); continue; }
    const buf = Buffer.from(await res.arrayBuffer());
    const file = `${soort}-${it.key}.jpg`;
    writeFileSync(join(fotoDir, file), buf);
    const { lic, artiest } = bestand ? await licentie(bestand) : { lic: "", artiest: "" };
    const credit = [artiest, lic, "via Wikimedia Commons"].filter(Boolean).join(" · ");
    uit.push({ key: it.label, src: `/fotos/${file}`, credit, bestand: bestand || "" });
    console.log(`✅ ${it.label} — ${Math.round(buf.length / 1024)} kB — ${lic || "licentie onbekend"}`);
  }
  return uit;
}

const steden = await haal(STEDEN, "stad");
const figuren = await haal(FIGUREN, "figuur");

const mod = `// AUTO-GEGENEREERD door scripts/haal-topo-fotos.mjs — niet handmatig bewerken.
// Foto's van Wikimedia Commons; credit-veld = maker · licentie (bronvermelding
// tonen waar de foto staat). Regenereer met: node scripts/haal-topo-fotos.mjs
export const STAD_FOTOS = ${JSON.stringify(Object.fromEntries(steden.map((s) => [s.key, { src: s.src, credit: s.credit }])), null, 2)};

export const FIGUUR_FOTOS = ${JSON.stringify(Object.fromEntries(figuren.map((s) => [s.key, { src: s.src, credit: s.credit }])), null, 2)};
`;
writeFileSync(join(root, "src", "data", "fotoData.js"), mod);
console.log(`\n📄 src/data/fotoData.js — ${steden.length} steden + ${figuren.length} figuren`);
