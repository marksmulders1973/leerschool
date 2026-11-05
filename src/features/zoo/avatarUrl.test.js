import { describe, it, expect } from "vitest";
import { CHARACTERS, DEFAULT_AVATAR, BLOCKY_BY_ID, maakAvatarUrl, parseAvatarUrl, schoneAvatarKleuren, AVATAR_KLEURVELDEN } from "./AssetRegistry.js";

describe("poppetjes-kiezer (5 nov 2026: geen 3D-held, eigen kleuren)", () => {
  it("heeft alleen blok-poppetjes, 30 stuks, zonder de 3D-held", () => {
    expect(CHARACTERS.length).toBe(30);
    expect(CHARACTERS.every((c) => c.blocky && c.url === `blocky:${c.id}`)).toBe(true);
    expect(CHARACTERS.find((c) => c.id === "heldMj")).toBeUndefined();
    expect(BLOCKY_BY_ID[DEFAULT_AVATAR]).toBeTruthy();
  });
  it("maakt en leest een url met eigen kleuren (rondreis)", () => {
    const url = maakAvatarUrl("blokMila", { shirt: "#FFD600", broek: "#1b2e5b" });
    expect(url).toBe("blocky:blokMila?shirt=ffd600&broek=1b2e5b");
    const p = parseAvatarUrl(url);
    expect(p.id).toBe("blokMila");
    expect(p.palette.shirt).toBe("#ffd600");
    expect(p.palette.broek).toBe("#1b2e5b");
    expect(p.palette.haar).toBe(BLOCKY_BY_ID.blokMila.haar); // rest = basis
    expect(p.palette.stijl).toBe("lang");
  });
  it("laat alleen bekende velden met geldige hex door", () => {
    expect(schoneAvatarKleuren({ shirt: "#ff0000", hoed: "#000000", haar: "rood", huid: "#12345" })).toEqual({ shirt: "#ff0000" });
    expect(parseAvatarUrl("blocky:blokSem?shirt=zzzzzz&haar=0d0b0a&x=ffffff").palette.shirt).toBe(BLOCKY_BY_ID.blokSem.shirt);
    expect(parseAvatarUrl("blocky:blokSem?haar=0d0b0a").palette.haar).toBe("#0d0b0a");
  });
  it("valt terug op de standaard bij een onbekend of oud poppetje", () => {
    expect(maakAvatarUrl("heldMj", {})).toBe(`blocky:${DEFAULT_AVATAR}`);
    expect(parseAvatarUrl("blocky:heldMj")).toBeNull();
    expect(parseAvatarUrl("/models/zoo/people/held-mj.glb")).toBeNull();
    expect(maakAvatarUrl("blokSem", null)).toBe("blocky:blokSem");
  });
  it("heeft per kleurveld alleen geldige hex-kleuren", () => {
    for (const f of AVATAR_KLEURVELDEN) for (const k of f.kleuren) expect(k).toMatch(/^#[0-9a-f]{6}$/);
  });
});
