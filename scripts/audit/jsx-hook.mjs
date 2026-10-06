// Node-loader-hook voor audit-scripts: laat .jsx-leerpaden laden via esbuild en
// vervangt import.meta.env (Vite) door een leeg object, zodat alle paden importeerbaar zijn.
import { transform } from "esbuild";
import { readFile } from "node:fs/promises";
export async function load(url, context, next) {
  const isSrc = url.startsWith("file:") && /\/src\//.test(url) && /\.(jsx?|mjs)$/.test(url);
  if (!isSrc) return next(url, context);
  let src = await readFile(new URL(url), "utf8");
  if (!url.endsWith(".jsx") && !src.includes("import.meta.env")) return next(url, context);
  src = src.replace(/import\.meta\.env/g, "({})");
  if (url.endsWith(".jsx")) src = (await transform(src, { loader: "jsx", format: "esm", jsx: "automatic" })).code;
  return { format: "module", source: src, shortCircuit: true };
}
