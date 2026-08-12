// Snelle visuele check v269: (1) leerkracht-snelkoppelingen op /mijn,
// (2) profiel-wissel-knop + wissel naar ander kind. Dev-server: :5185.
import { chromium } from "playwright";

const CHROME = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const SHOTS = "C:\\Users\\mark-\\Desktop\\Studiebol\\avatar-check\\";
const browser = await chromium.launch({ headless: true, executablePath: CHROME });

// 1) Leerkracht
{
  const ctx = await browser.newContext({ viewport: { width: 390, height: 950 } });
  await ctx.addInitScript(() => {
    localStorage.setItem("ls_user", JSON.stringify({ name: "Juf Anna", level: "", role: "teacher" }));
  });
  const page = await ctx.newPage();
  await page.goto("http://localhost:5185/mijn", { waitUntil: "networkidle" });
  await page.reload({ waitUntil: "networkidle" });
  await page.waitForTimeout(1000);
  await page.screenshot({ path: SHOTS + "v269-leerkracht.png" });
  const chips = ["Toets maken", "Werkblad printen", "Scores", "Mijn klassen", "Takenlijst"];
  for (const c of chips) console.log(`leerkracht-chip "${c}":`, await page.getByText(c).count() > 0 ? "JA" : "NEE");
  await ctx.close();
}

// 2) Kind + profiel-wissel (twee namen op het apparaat)
{
  const ctx = await browser.newContext({ viewport: { width: 390, height: 950 } });
  await ctx.addInitScript(() => {
    localStorage.setItem("ls_user", JSON.stringify({ name: "Sanne", level: "groep 8", role: "leerling" }));
    localStorage.setItem("lk_namen", JSON.stringify(["Sanne", "Bram"]));
    localStorage.setItem("lk_profiel:Bram", JSON.stringify({ level: "groep 4", role: "leerling", schoolType: "" }));
  });
  const page = await ctx.newPage();
  await page.goto("http://localhost:5185/mijn", { waitUntil: "networkidle" });
  await page.reload({ waitUntil: "networkidle" });
  await page.waitForTimeout(1000);
  const wisselKnop = page.getByRole("button", { name: /wissel/i }).first();
  console.log("wissel-knop zichtbaar:", await wisselKnop.count() > 0 ? "JA" : "NEE");
  await wisselKnop.click();
  await page.screenshot({ path: SHOTS + "v269-wissel-open.png" });
  await page.getByRole("button", { name: "Bram" }).click();
  await page.waitForTimeout(1200);
  const naamBram = await page.getByText("Bram").first().count();
  const groep4 = await page.getByText("Groep 4").count();
  console.log("na wissel: naam Bram:", naamBram > 0 ? "JA" : "NEE", "· Groep 4:", groep4 > 0 ? "JA" : "NEE");
  await page.screenshot({ path: SHOTS + "v269-na-wissel.png" });
  await ctx.close();
}

await browser.close();
console.log("klaar");
