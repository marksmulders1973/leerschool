// @vitest-environment jsdom
import { describe, it, expect } from "vitest";
import { generateCode, splitsCodes, codesOver, koppelLink, koppelBericht, codeUitUrl, MAX_CODES } from "./koppelcodes.js";

describe("koppelcodes", () => {
  it("code: 6 tekens zonder verwarrende letters (0/O/1/I/L)", () => {
    for (let i = 0; i < 50; i++) expect(generateCode()).toMatch(/^[ABCDEFGHJKMNPQRSTUVWXYZ23456789]{6}$/);
  });
  it("splitst losse codes (zonder naam) van codes op naam", () => {
    const { losse, opNaam } = splitsCodes([{ id: 1, child_name: "" }, { id: 2, child_name: "Brian" }, { id: 3, child_name: "  " }, { id: 4 }]);
    expect(losse.map((x) => x.id)).toEqual([1, 3, 4]);
    expect(opNaam.map((x) => x.id)).toEqual([2]);
    expect(splitsCodes(undefined)).toEqual({ losse: [], opNaam: [] });
  });
  it("hoogstens 3 kinderen + codes samen", () => {
    expect(MAX_CODES).toBe(3);
    expect(codesOver(0, 0)).toBe(3); expect(codesOver(1, 1)).toBe(1); expect(codesOver(2, 2)).toBe(0);
  });
  it("link en bericht bevatten de code en /koppelen", () => {
    expect(koppelLink(" AB12CD ")).toBe("https://leerkwartier.app/koppelen?code=AB12CD");
    const b = koppelBericht("AB12CD", "Brian");
    expect(b).toContain("Hoi Brian!"); expect(b).toContain("/koppelen?code=AB12CD"); expect(b).toContain("typ de code AB12CD");
    expect(koppelBericht("AB12CD")).toContain("Hoi!");
  });
  it("code uit de URL, anders uit het codebalk-voorstel, genormaliseerd", () => {
    expect(codeUitUrl("?code=ab-12%20cd")).toBe("AB12CD");
    sessionStorage.setItem("lk_koppelcode_voorstel", "xy.z123");
    expect(codeUitUrl("", sessionStorage)).toBe("XYZ123");
    expect(codeUitUrl("?x=1", null)).toBe("");
  });
});
