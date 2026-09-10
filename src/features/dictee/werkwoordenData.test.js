import { describe, it, expect } from "vitest";
import { ZINNEN, VORMEN, stamVan, vervoeg, kiesTest, itemsVoorWerkwoorden, parseWerkwoorden } from "./werkwoordenData.js";

describe("werkwoordenData — zinnenbank", () => {
  it("elke zin heeft één gat, een bekende vorm en een passend antwoord", () => {
    for (const z of ZINNEN) {
      expect(z.zin.split("___").length, z.zin).toBe(2);
      expect(Object.keys(VORMEN)).toContain(z.tijd);
      expect(z.vorm.length, z.zin).toBeGreaterThan(1);
      if (z.zin.startsWith("___")) expect(z.vorm[0], z.zin).toBe(z.vorm[0].toUpperCase());
    }
    expect(new Set(ZINNEN.map((z) => z.zin)).size).toBe(ZINNEN.length);
    for (const v of Object.keys(VORMEN)) expect(ZINNEN.filter((z) => z.tijd === v).length).toBeGreaterThanOrEqual(20);
  });
  it("kiesTest geeft n zinnen, verdeeld over de vormen", () => {
    const t = kiesTest(20);
    expect(t.length).toBe(20);
    for (const v of Object.keys(VORMEN)) expect(t.filter((z) => z.tijd === v).length).toBe(5);
  });
});

describe("werkwoordenData — vervoegen", () => {
  it("stam volgens de spellingregels", () => {
    const st = { lopen: "loop", bakken: "bak", leven: "leef", reizen: "reis", tekenen: "teken", luisteren: "luister", proberen: "probeer", informeren: "informeer", verzamelen: "verzamel", wandelen: "wandel", verbreden: "verbreed", spelen: "speel", praten: "praat", werken: "werk", verhuizen: "verhuis", fietsen: "fiets", antwoorden: "antwoord", openen: "open", redden: "red", gooien: "gooi" };
    for (const [inf, stam] of Object.entries(st)) expect(stamVan(inf), inf).toBe(stam);
  });
  it("regelmatige vormen", () => {
    expect(vervoeg("praten")).toMatchObject({ tt: "praat", vt: "praatte", vd: "gepraat" });
    expect(vervoeg("wachten")).toMatchObject({ tt: "wacht", vt: "wachtte", vtm: "wachtten", vd: "gewacht" });
    expect(vervoeg("redden")).toMatchObject({ tt: "redt", vt: "redde", vd: "gered", bvd: "geredde" });
    expect(vervoeg("verhuizen")).toMatchObject({ tt: "verhuist", vt: "verhuisde", vd: "verhuisd", bvd: "verhuisde" });
    expect(vervoeg("proeven")).toMatchObject({ tt: "proeft", vt: "proefde", vd: "geproefd" });
    expect(vervoeg("lachen")).toMatchObject({ vt: "lachte", vd: "gelachen" });
    expect(vervoeg("verbreden")).toMatchObject({ vt: "verbreedde", vd: "verbreed", bvd: "verbrede" });
    expect(vervoeg("vergroten")).toMatchObject({ vd: "vergroot", bvd: "vergrote" });
    expect(vervoeg("informeren")).toMatchObject({ tt: "informeert", vt: "informeerde", vd: "geïnformeerd" });
    expect(vervoeg("tekenen")).toMatchObject({ tt: "tekent", vt: "tekende", vd: "getekend" });
  });
  it("sterke werkwoorden uit de tabel", () => {
    expect(vervoeg("zwerven")).toMatchObject({ vt: "zwierf", vd: "gezworven", sterk: true });
    expect(vervoeg("vinden")).toMatchObject({ tt: "vindt", vt: "vond", vd: "gevonden" });
    expect(vervoeg("bakken")).toMatchObject({ vd: "gebakken", bvd: "gebakken" });
  });
  it("eigen werkwoorden → oefenzinnen; plakken filtert", () => {
    expect(parseWerkwoorden("1. informeren\nlopen, praten\nhele zin die niet hoort\nfiets")).toEqual(["informeren", "lopen", "praten"]);
    const items = itemsVoorWerkwoorden(["praten", "lopen"]);
    expect(items.length).toBe(6);
    for (const it of items) { expect(it.zin.includes("___")).toBe(true); expect(it.vorm.length).toBeGreaterThan(1); }
  });
});
