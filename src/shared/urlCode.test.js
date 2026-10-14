import { describe, it, expect } from "vitest";
import { betekenisVanCode, toetsCodeUitUrl, CODE_ROUTES } from "./urlCode.js";

// Deze test zet vast wat `?code=` per route betekent. Botst een nieuwe link met de toets-lezer
// (zoals /koppelen op 14 okt 2026), dan faalt dit hier en niet pas op Marks telefoon.
describe("betekenisVanCode", () => {
  it("is op /koppelen een koppelcode, met en zonder slash", () => {
    expect(betekenisVanCode("/koppelen")).toBe("koppelen");
    expect(betekenisVanCode("/koppelen/")).toBe("koppelen");
  });
  it("is overal elders een toets-deelcode", () => {
    for (const p of ["/", "/mijn", "/ouder", "/klas", "/leren/pad", "/koppelenx", "/vandaag"]) {
      expect(betekenisVanCode(p)).toBe("toets");
    }
  });
  it("heeft voor elke route in de tabel een geldige betekenis", () => {
    for (const r of CODE_ROUTES) expect(["toets", "koppelen"]).toContain(r.betekenis);
  });
});

describe("toetsCodeUitUrl", () => {
  it("leest een korte code op de startpagina en maakt er hoofdletters van", () => {
    expect(toetsCodeUitUrl({ pathname: "/", search: "?code=ab12cd" })).toBe("AB12CD");
  });
  it("negeert ?code= op /koppelen (ouderkoppelcode, geen toets)", () => {
    expect(toetsCodeUitUrl({ pathname: "/koppelen", search: "?code=TBZ5WJ" })).toBeNull();
  });
  it("negeert lange waarden (Supabase-OAuth zet ook ?code=)", () => {
    expect(toetsCodeUitUrl({ pathname: "/", search: "?code=0f3a9c2e-1b2c-4d5e-8f9a-123456789abc" })).toBeNull();
  });
  it("geeft null zonder code", () => {
    expect(toetsCodeUitUrl({ pathname: "/", search: "" })).toBeNull();
    expect(toetsCodeUitUrl({ pathname: "/", search: "?code=" })).toBeNull();
  });
});
