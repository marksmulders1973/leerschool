// Check v270: rol-herkenning in de profiel-wissel (juf paars met 🧑‍🏫,
// kind groen) + wissel naar de juf zet de klas-kaart aan.
import { chromium } from "playwright";

const CHROME = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const browser = await chromium.launch({ headless: true, executablePath: CHROME });
const ctx = await browser.newContext({ viewport: { width: 390, height: 950 } });
await ctx.addInitScript(() => {
  localStorage.setItem("ls_user", JSON.stringify({ name: "Sanne", level: "groep 8", role: "leerling" }));
  localStorage.setItem("lk_namen", JSON.stringify(["Sanne", "Bram", "Juf Anna"]));
  localStorage.setItem("lk_profiel:Bram", JSON.stringify({ level: "groep 4", role: "leerling", schoolType: "" }));
  localStorage.setItem("lk_profiel:Juf Anna", JSON.stringify({ level: "", role: "teacher", schoolType: "" }));
});
const page = await ctx.newPage();
await page.goto("http://localhost:5185/mijn", { waitUntil: "networkidle" });
await page.reload({ waitUntil: "networkidle" });
await page.waitForTimeout(1000);
await page.getByRole("button", { name: /wissel/i }).first().click();
console.log("juf-chip met 🧑‍🏫:", await page.getByRole("button", { name: /🧑‍🏫 Juf Anna/ }).count() > 0 ? "JA" : "NEE");
console.log("kind-chip met 👦:", await page.getByRole("button", { name: /👦 Bram/ }).count() > 0 ? "JA" : "NEE");
await page.screenshot({ path: "C:\\Users\\mark-\\Desktop\\Studiebol\\avatar-check\\v270-wissel-rollen.png" });
await page.getByRole("button", { name: /🧑‍🏫 Juf Anna/ }).click();
await page.waitForTimeout(1200);
console.log("na wissel naar juf — klas-kaart:", await page.getByText("Jouw klas").count() > 0 ? "JA" : "NEE");
console.log("naam Juf Anna:", await page.getByText("Juf Anna").first().count() > 0 ? "JA" : "NEE");
await browser.close();
console.log("klaar");
