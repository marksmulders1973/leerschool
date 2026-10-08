// Gedeeld: laad een leerpad (ook paden met .jsx-imports) via de stub-loader.
import fs from "node:fs"; import path from "node:path"; import { pathToFileURL } from "node:url";
export const ROOT = path.resolve("src/learnPaths");
export const manifest = () => JSON.parse(fs.readFileSync(path.join(ROOT, "pathManifest.generated.json"), "utf8"));
export async function laadPad(id, vers = false) {
  const e = manifest().find((m) => m.id === id);
  if (!e) throw new Error("onbekend pad " + id);
  const url = pathToFileURL(path.join(ROOT, e.file)).href + (vers ? "?t=" + Date.now() : "");
  return { pad: (await import(url)).default, entry: e, bestand: path.join(ROOT, e.file) };
}
export const mc = (s) => (s?.checks || []).filter((c) => Array.isArray(c?.options) && c.options.length);
export const norm = (x) => String(x ?? "").replace(/\*\*/g, "").replace(/[­​-‍⁠﻿]/g, "").replace(/\s+/g, " ").trim().toLowerCase();
