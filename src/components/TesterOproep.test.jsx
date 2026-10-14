// @vitest-environment jsdom
import { describe, it, expect, beforeEach, vi } from "vitest";
import { toonTesterOproep } from "./TesterOproep.jsx";

const zetUA = (ua) => Object.defineProperty(navigator, "userAgent", { value: ua, configurable: true });

describe("toonTesterOproep", () => {
  beforeEach(() => { localStorage.clear(); Object.defineProperty(document, "referrer", { value: "", configurable: true }); window.matchMedia = vi.fn().mockReturnValue({ matches: false }); });
  it("niet op iPhone of laptop", () => { zetUA("Mozilla/5.0 (iPhone; CPU iPhone OS 17_0)"); expect(toonTesterOproep()).toBe(false); zetUA("Mozilla/5.0 (Windows NT 10.0)"); expect(toonTesterOproep()).toBe(false); });
  it("wel op Android in de browser", () => { zetUA("Mozilla/5.0 (Linux; Android 14; Pixel 7) Chrome/120"); expect(toonTesterOproep()).toBe(true); });
  it("niet als al weggetikt", () => { zetUA("Mozilla/5.0 (Linux; Android 14)"); localStorage.setItem("lk_tester_oproep_dicht", "1"); expect(toonTesterOproep()).toBe(false); });
  it("niet in de Play-app zelf (TWA)", () => {
    zetUA("Mozilla/5.0 (Linux; Android 14)");
    Object.defineProperty(document, "referrer", { value: "android-app://app.leerkwartier.twa/", configurable: true });
    expect(toonTesterOproep()).toBe(false);
    Object.defineProperty(document, "referrer", { value: "", configurable: true });
    localStorage.setItem("lk_bron", JSON.stringify({ bron: "site:app.leerkwartier.twa" }));
    expect(toonTesterOproep()).toBe(false);
  });
});
