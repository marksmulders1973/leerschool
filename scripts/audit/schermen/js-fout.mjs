// Zoekt welk script HTML terugkrijgt ("Unexpected token '<'") in de lokale preview.
import { chromium } from "playwright";
import { koppelStub, maakStore, TELEFOON, CHROMIUM } from "../ouderadvies/stubServer.mjs";
const b = await chromium.launch({ executablePath: CHROMIUM });
const ctx = await b.newContext(TELEFOON); await koppelStub(ctx, maakStore(), {});
const p = await ctx.newPage();
p.on("response", async (r) => { const t = r.headers()["content-type"] || ""; if (r.request().resourceType() === "script" && t.includes("html")) console.log("HTML-als-script:", r.url()); });
await p.goto("http://localhost:4173/"); await p.waitForTimeout(2500); await b.close();
