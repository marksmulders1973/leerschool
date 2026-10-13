import { createRequire } from "node:module"; const { transform } = createRequire(process.cwd() + "/package.json")("esbuild"); import fs from "node:fs"; import { fileURLToPath } from "node:url";
export async function resolve(spec, ctx, next) {
  try { return await next(spec, ctx); } catch (e) {
    for (const ext of [".js", ".jsx"]) { try { return await next(spec + ext, ctx); } catch {} }
    throw e;
  }
}
export async function load(url, context, next) {
  if (/\.(png|svg|jpg|jpeg|webp|css|mp3|mp4)$/.test(url)) return { format: "module", source: "export default ''", shortCircuit: true };
  if (url.endsWith(".jsx")) {
    const src = fs.readFileSync(fileURLToPath(url), "utf8");
    const out = await transform(src.replace(/import\.meta\.env/g, "({})"), { loader: "jsx", jsx: "automatic", format: "esm" });
    return { format: "module", source: out.code, shortCircuit: true };
  }
  if (url.includes("/src/") && url.endsWith(".js")) {
    const src = fs.readFileSync(fileURLToPath(url), "utf8");
    if (src.includes("import.meta.env")) return { format: "module", source: src.replace(/import\.meta\.env/g, "({})"), shortCircuit: true };
  }
  return next(url, context);
}
