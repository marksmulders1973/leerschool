// Keuzepagina voor klankopnames (28 okt 2026). Start: `node scripts/klanken/kies-server.mjs`
// → http://localhost:4190. Per klank hoor je de kandidaten (Microsoft-stemmen Fenna/Maarten uit
// maak-kandidaten.py) of je spreekt de klank zelf in. "Kies" zet het bestand in
// public/audio/klanken/<klank>.mp3 en werkt src/shared/klankenManifest.js bij. Daarna gewoon
// bouwen + pushen; de app speelt de opname af (src/shared/klanken.js).
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const HIER = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HIER, "..", "..");
const KAND = path.join(HIER, "kandidaten");
const DOEL = path.join(ROOT, "public", "audio", "klanken");
const GEKOZEN = path.join(HIER, "gekozen.json");
const MANIFEST = path.join(ROOT, "src", "shared", "klankenManifest.js");
const POORT = 4190;
fs.mkdirSync(DOEL, { recursive: true });

const leesGekozen = () => { try { return JSON.parse(fs.readFileSync(GEKOZEN, "utf8")); } catch { return {}; } };
function schrijfGekozen(g) {
  fs.writeFileSync(GEKOZEN, JSON.stringify(g, null, 1) + "\n");
  const map = Object.fromEntries(Object.keys(g).sort().map((k) => [k, `${k}.mp3`]));
  fs.writeFileSync(MANIFEST,
    "// Gekozen klankopnames (public/audio/klanken/). Geschreven door scripts/klanken/kies-server.mjs —\n" +
    "// niet met de hand bewerken. Leeg = schijn-spelling via de browserstem (src/shared/klanken.js).\n" +
    `export default ${JSON.stringify(map, null, 2)};\n`);
}
const FILTER = "silenceremove=start_periods=1:start_threshold=-42dB:start_silence=0.05,areverse,silenceremove=start_periods=1:start_threshold=-42dB:start_silence=0.12,areverse,loudnorm=I=-18:TP=-2";
function naarMp3(bron, doel, knip) {
  const args = ["-v", "error", "-y", "-i", bron];
  if (knip) args.push("-af", FILTER);
  args.push("-ar", "44100", "-ac", "1", "-b:a", "96k", doel);
  execFileSync("ffmpeg", args);
}
const json = (res, obj, code = 200) => { res.writeHead(code, { "content-type": "application/json; charset=utf-8" }); res.end(JSON.stringify(obj)); };
const lees = (req) => new Promise((ok) => { const d = []; req.on("data", (c) => d.push(c)); req.on("end", () => ok(Buffer.concat(d))); });
const veiligKlank = (k) => /^[a-z]{1,3}$/.test(String(k || "")) ? k : null;

http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://localhost:${POORT}`);
  try {
    if (req.method === "GET" && url.pathname === "/") {
      res.writeHead(200, { "content-type": "text/html; charset=utf-8" });
      return res.end(fs.readFileSync(path.join(HIER, "kies.html")));
    }
    if (req.method === "GET" && url.pathname === "/kandidaten.json") {
      return json(res, { kandidaten: JSON.parse(fs.readFileSync(path.join(KAND, "kandidaten.json"), "utf8")), gekozen: leesGekozen() });
    }
    if (req.method === "GET" && url.pathname.startsWith("/kandidaten/")) {
      const f = path.join(KAND, path.basename(url.pathname));
      if (!fs.existsSync(f)) return json(res, { fout: "weg" }, 404);
      res.writeHead(200, { "content-type": "audio/mpeg", "cache-control": "no-store" });
      return res.end(fs.readFileSync(f));
    }
    if (req.method === "GET" && url.pathname.startsWith("/gekozen/")) {
      const f = path.join(DOEL, path.basename(url.pathname));
      if (!fs.existsSync(f)) return json(res, { fout: "weg" }, 404);
      res.writeHead(200, { "content-type": "audio/mpeg", "cache-control": "no-store" });
      return res.end(fs.readFileSync(f));
    }
    if (req.method === "POST" && url.pathname === "/kies") {
      const { klank, bestand } = JSON.parse((await lees(req)).toString("utf8"));
      const k = veiligKlank(klank); const bron = path.join(KAND, path.basename(bestand || ""));
      if (!k || !fs.existsSync(bron)) return json(res, { fout: "onbekend" }, 400);
      fs.copyFileSync(bron, path.join(DOEL, `${k}.mp3`));
      const g = leesGekozen(); g[k] = { bron: path.basename(bron), wanneer: new Date().toISOString() }; schrijfGekozen(g);
      return json(res, { ok: true, gekozen: g });
    }
    if (req.method === "POST" && url.pathname === "/opname") {
      const k = veiligKlank(url.searchParams.get("klank"));
      if (!k) return json(res, { fout: "klank" }, 400);
      const tmp = path.join(KAND, `_opname_${k}.webm`);
      fs.writeFileSync(tmp, await lees(req));
      const mp3 = path.join(KAND, `${k}__eigen_mark.mp3`);
      naarMp3(tmp, mp3, true);
      fs.unlinkSync(tmp);
      fs.copyFileSync(mp3, path.join(DOEL, `${k}.mp3`));
      const g = leesGekozen(); g[k] = { bron: path.basename(mp3), wanneer: new Date().toISOString() }; schrijfGekozen(g);
      return json(res, { ok: true, bestand: path.basename(mp3), gekozen: g });
    }
    if (req.method === "POST" && url.pathname === "/wis") {
      const { klank } = JSON.parse((await lees(req)).toString("utf8"));
      const k = veiligKlank(klank); if (!k) return json(res, { fout: "klank" }, 400);
      try { fs.unlinkSync(path.join(DOEL, `${k}.mp3`)); } catch { /* */ }
      const g = leesGekozen(); delete g[k]; schrijfGekozen(g);
      return json(res, { ok: true, gekozen: g });
    }
    json(res, { fout: "onbekend pad" }, 404);
  } catch (e) {
    json(res, { fout: String(e.message || e) }, 500);
  }
}).listen(POORT, () => console.log(`Klanken kiezen: http://localhost:${POORT}`));
